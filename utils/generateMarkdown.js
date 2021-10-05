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
# ${data.title}
## Description 
${data.description}
## Table of Contents
- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Licence](#license)
- [Badge](#badge)
- [Features](#features)
- [Contributing Instructions](#contributing)
- [Testing](#testing)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License
${data.license}
## Badge
${data.badge}
## Features
${data.features}
## Contributing Instructions
${data.contributing}
- [Technologies Used](#technologies)
${data.choices}
## Testing Data
${data.test}
## Any question please contact me at:
${data.contact}

`;
}

module.exports = generateMarkdown;