const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");


const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "userName"
    },
    {
        type: 'input',
        name: 'fullName',
        message: 'Enter your name.'
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of this project?",
        name: "description",
    },
    {
        //this should be a different input
        type: "list",
        name: "license",
        message: "Please input an appropriate license type for this project",
        choices: [
            "MIT",
            "Apache2.0",
            "GNUv3.0",

        ]
    },
    {
        type: 'input',
        name: 'year',
        message: 'What is the copywrite year?'
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
    },
    {
        type: "input",
        message: "What are the tests?",
        name: "tests",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        type: "input",
        message: "Any additional information about contributing to the repo?",
        name: "contributing",
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err =>
        err ? console.log(err) : console.log('Success!'))
}

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', data)
        })
}

init();






