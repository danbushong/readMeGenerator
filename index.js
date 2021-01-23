generateMarkdown = require("./assets/js/generateMarkdown.js");



const inquirer = require("inquirer");
const fs =require("fs");

const axios = require("axios")

function userInputs(){
    inquirer
    //keep the prompt
  .prompt([{
    type: "input",
    message: "What is your Github username?",
    name: "userName"
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
    type: "input",
    message: "What is the path for this project's screenshot?",
    default: "assets/img/screenshot.gif",
    name: "projectImgSRC",
},
{
    type: "input",
    message: "What command should be run to install dependencies?",
    default: "`npm install`",
    name: "projectInstall",
},
{
    type: "input",
    message: "What command should be run to run the program?",
    default: "`node index.js`",
    name: "projectRun",
},
{
    type: "input",
    message: "What command should be run to start tests?",
    default: "`npm test`",
    name: "projectTest",
},
{
    type: "input",
    message: "Any additional information about the project?",
    name: "projectInfo",
},
{
    type: "input",
    message: "Please input an appropriate license type for this project",
    default: "MIT",
    name: "projectLicense",
}



  


  ])






}
