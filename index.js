const inquirer = require('inquirer');
const fs = require('fs');
const writeToFile = require('./utils/generateMarkdown.js');
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
                fs.writeFile('Readme.md', readmeDetails, err => {
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
