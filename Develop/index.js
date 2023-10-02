// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markDown = require("./generateMarkdown");
const fs = require("fs");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Descriptions"
    },
    {
        type: "input",
        name: "installationInstruction",
        message: "Instructions"
    },
    {
        type: "list",
        name: "license",
        message: "license",
        choices: ["Apache","IPL","MIT","None"]
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(markDown(answers));
        fs.writeFileSync(path.join(process.cwd(),"README.md"),markDown(answers))
    })
 }

// Function call to initialize app
init();
