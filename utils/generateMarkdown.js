const fs = require('fs');

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('Readme.md', fileContent, err => {
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
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {

};

// TODO: Create a function to generate markdown for README
// const generateMarkdown = (data) =>{
//   return `# ${data.title}

// `;
// };

// module.exports = generateMarkdown;
module.exports = writeToFile;
