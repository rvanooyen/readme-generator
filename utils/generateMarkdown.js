 // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const renderLicenseBadge = (license) => {

// };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// const renderLicenseLink = (license) => {

// };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// const renderLicenseSection = (license) => {

// };

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>{
  return `
    # Title
     ${data.title}
    ## Description 
     ${data.description}
    ## Table of Contents
    -[Title](#title)
    - Description
    - Installation
    - Usage
    - Credits
    - Licence
    - Testing
    - Questions
    ## Technologies Used
    ${data.choices}

`;
};


module.exports = generateMarkdown;