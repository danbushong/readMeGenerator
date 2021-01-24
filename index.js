const generateMarkdown = require("./utils/generateMarkdown.js");


const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");




function userInputs(){
    inquirer
    //keep the prompt
  .prompt([{
      
    type: "input",
    message: "What is your Github username?",
    name: "userName"
},
{
    type: 'input',
    name: 'fullName',
    message: 'Enter your  name.'
},
{
    type: "input",
    message: "What is your email address?",
    name: "userEmail",
},
{
    type: "input",
    message: "What is your project title?",
    name: "projectTitle",
},
{
    type: "input",
    message: "What is the description of this project?",
    name: "projectDescription",
},
{
    //this should be a different input
    type: "input",
    name: "projectLicense",
    message: "Please input an appropriate license type for this project",
    choices:[
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
    default: "`npm install`",
    name: "projectInstall",
},
{
    type: "input",
    message: "What command should be run to start tests?",
    default: "`npm test`",
    name: "projectTest",
},
{
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "projectRepoInfo",
},
{
    type: "input",
    message: "Any additional information about contributing to the repo?",
    name: "projectRepoInfoTwo",
}




])


}


