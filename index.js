const inquirer = require('inquirer');
const fs = require('fs');
// const renderLicenseSection = require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the readme title. (Requiered)',
            validate: titleInput => {
                if (titleInput) {
                    questions.push(titleInput);
                    return true;
                } else {
                    console.log('Please enter your Readme title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for the Readme file. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    questions.push(descriptionInput);
                    return true;
                } else {
                    console.log('Please enter your Readme description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languagesUsed',
            message: 'Please select the languages used.',
            choices: ['jScript', 'CSS', 'HTML', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter the installation instructions. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    questions.push(installationInput);
                    return true;
                } else {
                    console.log('Please enter Readme installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter instructions for using the Readme file. Please add screenshots as necessary(Required)',
            validate: usageInput => {
                if (usageInput) {
                    questions.push(usageInput);
                    return true;
                } else {
                    console.log('Please enter your Readme instructions on use!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please enter who contributed to your Readme file. (Required)',
            validate: creditInput => {
                if (creditInput) {
                    questions.push(creditInput);
                    return true;
                } else {
                    console.log('Please enter who contributed to your Readme!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for the Readme file. (Required)',
            choices: ['Apache', 'GNU', 'MIT', 'OpenBSD', 'None'],
            validate: licenseInput => {
                if (licenseInput) {
                    questions.push(licenseInput);
                    return true;
                } else {
                    console.log('Please enter your Readme description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'features',
            message: 'Please enter any features for Readme file. (Required)',
            validate: featuresInput => {
                if (featuresInput) {
                    questions.push(featuresInput);
                    return true;
                } else {
                    console.log('Please enter any features for your Readme!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter any contributing instructions for your Readme file. (Required)',
            validate: contributingInput => {
                if (contributingInput) {
                    questions.push(contributingInput);
                    return true;
                } else {
                    console.log('Please enter any contributing instructions for your Readme!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter any test data for the Readme file. (Required)',
            validate: testInput => {
                if (testInput) {
                    questions.push(testInput);
                    return true;
                } else {
                    console.log('Please enter any test data for your Readme');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contact',
            message: 'If you have any questions please contact me at. (Required)',
            validate: contactInput => {
                if (contactInput) {
                    questions.push(contactInput);
                    return true;
                } else {
                    console.log('Please contact me at!');
                    return false;
                }
            }
        }
    ])    
};

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
const init = () => {
    // Prompts user for inputs
    promptUser()
        .then(questions => {
            console.log(questions);            
            const readmeDetails = generateMarkdown(questions);
            
            return new Promise((resolve, reject) => {
                fs.writeFile('README.md', readmeDetails, err => {
                    if (err) {
                        reject(err);
                        return;
                    }
        
                    resolve({
                        ok: true,
                        message: 'Readme created!'
                    });
                });
            });
        })        
        .then(writeToFileResponse => {
            console.log(writeToFileResponse);            
        })
        .catch(err => {
            console.log(err);
        });
};

// Function call to initialize app
init();
