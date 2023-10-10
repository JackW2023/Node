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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}



// Function call to initialize app
init();
