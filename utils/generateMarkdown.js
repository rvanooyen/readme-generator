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
const renderLicenseSection = (license) => {
    let licenseString = '';

    switch (license) {
        case 'Apache':
            licenseString = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'GNU':
            licenseString = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'MIT':
            licenseString = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'OpenBSD':
            licenseString = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        case 'None':
            licenseString = '';
            break;              
    }
    
    return licenseString;
};

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

module.exports = {generateMarkdown, renderLicenseSection};
