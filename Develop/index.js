// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
const path = require("path")

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of the project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of the project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain the installation process of the project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will the Project benifit the user ?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who are contributing to the Project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How was the project tested ?',
    },
    {
        type: 'list',
        name: 'Select a license to be used:',
        choices: ['None, MIT License, GNU GPL v3.0, BSD 2-Clause "simplified" License, BSD 3-Clause "New" or "Revised" License, Boost Software License 1.0, Creative Commons Zero v1.0 Universal'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'how was the project tested ?',
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFilesync(path.join(process.cwd().filename).data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Creating the Perfect README.md file...");
        writeToFile("./utils/README.md", generateMarkdown({ ...responses }))
    })
}

// Function call to initialize app
init();
