// Adding node function 'require'
const inquirer = require('inquirer');

// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown');
// fs is for writing to files
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        // Prompting user for title
        // The type is defining what type of input is presented to the user
        type: 'input',
        name: 'title',
        message: 'What is the project title'
    },
    {
        // Prompting user for description
        type: 'input',
        name: 'description',
        message: 'Description'
    },
    {
        // Prompting user for instruction
        type: 'input',
        name: 'installInstruction',
        message: 'Please provide installation instruction'
    },
    {
        // Prompting user for usage information
        type: 'input',
        name: 'usageInfo',
        message: 'Please provide usage information'
    },
    {
        // Prompting user for contribution guidelines
        type: 'input',
        name: 'guidelines',
        message: 'Enter contribution guideline'
    },
    {
        // Prompting user for testing instruction
        type: 'input',
        name: 'testInstruction',
        message: 'Enter testing instruction'
    },
    {
        // Asking user to select a license 
        type: 'select',
        name: 'license',
        message: 'Please select a license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // The fs.writeFile() function is build in module for node.js
    fs.writeFile(fileName, data, err => {
        if (err) {
            // if there are err then I'll log the error
            // The console.error(err), has the same function as console.log(err)
            // The console.error(err) will indicate I am logging an actual error instead of logging other info
            console.error(err);
            // If error then end immediately 
            return;
        }
        // Else I would log success
        console.log("Successfully wrote to", fileName);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule
}



// Function call to initialize app
init();
