generateMarkdown = require("./assets/js/generateMarkdown.js");



const inquirer = require("inquirer");
const fs =require("fs");


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
    //this should be a different input
    type: "input",
    name: "projectLicense",
    message: "Please input an appropriate license type for this project",
    choices:[
        "MIT",
        "APACHE",
        "GPL",
        "BSD",
        "None"
    ]
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
.then((inquirerResponses) => {
    getUser(inquirerResponses.userName)
        .then((githubResponse) => {
            
            inquirerResponses = githubResponse.data
            
            let markdownReadme = generateMarkdown(inquirerResponses);
            
            writeToFile('README.md', markdownReadme);
        })
})

}
//this will actually make the file 
function writeToFile(file,data) {
    fs.writeFile(file, data, function(err){
        if (err) {
            return console.log(err);
        }
        console.log("It worked!");
    })
}
userInputs()
