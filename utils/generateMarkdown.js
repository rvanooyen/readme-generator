const fs = require('fs');

exports.writeToFile = function(fileContent) {
    let fileContentString ="";
    console.log(fileContent);

    const { title, description } = fileContent;
    const fileContentArr = [];

    fileContentArr.push(title);
    fileContentArr.push(description);
    console.log(fileContentArr);

    return new Promise((resolve, reject) => {
        fileContentString = title;
        fs.writeFile('Readme.md', fileContentString, err => {
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
        
    
    // for (let i = 0; i < fileContentArr.length; i++) {    
    //     return new Promise((resolve, reject) => {
    //         fileContentString = fileContentArr[i + 1];
    //         fs.appendFile('Readme.md', fileContentString, err => {
    //             if (err) {
    //                 reject(err);
    //                 return;
    //             }

    //             resolve({
    //                 ok: true,
    //                 message: 'Readme created!'
    //             });
    //         });
    //     });
    // }
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