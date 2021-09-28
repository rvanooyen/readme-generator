const inquirer = require('inquirer');
const fs = require('fs');
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
                    console.log('Please enter your readme title!');
                    return false;
                }
            }
        }
    ])    
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {

};

// TODO: Create a function to initialize app
const init = () => {
    // console.log(questions);
};

// Function call to prompt user
promptUser();

// Function call to initialize app
init();
