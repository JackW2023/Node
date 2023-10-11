// Adding node function 'require'
const inquirer = require('inquirer');

// TODO: Include functions needed for this application
const {generateMarkdown} = require('./generateMarkdown');
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
        // Prompting user for contributions
        type: 'input',
        name: 'contribution',
        message: 'Please provide all the contributor and contribution'
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
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ["Apache", "GPLv3", "IPL", "MIT", "None"]
    },
    {
        // Prompting user for the person to contact for question
        type: 'input',
        name: 'contact',
        message: 'Please enter the name of the personnel for FAQ'
    },
    
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
    // I am using the inquirer package to create interactive commanded-line to prompt the user of the questions
    // I am passing in the questions that I const at the top
    // After the user been prompt the inquirer package return a promise 
        // the ".them" is a part of JavaScript's Promise syntax
        // The inquirer.prompt method returns a Promise, which means it will perform some asynchronous operation and let you know when it's done.
        // The then method lets you specify what should be done once the promise resolves 
        // The arrow function here receives the user's answers as its argument. 
        // The answers object will contain the user's responses, with the keys corresponding to the name properties of your question objects.
            // I take the answers object (the user's responses) and passing it to the generateMarkdown function. 
            // The generateMarkdown() function which now call markDownContent is presumably designed to take the user's answers and generate a string of Markdown content for your README.
            // The result of the Markdown string is then stored in the constant markdownContent.
    inquirer.prompt(questions) 
        .then(answers=>{
            const markDownContent = generateMarkdown(answers);
            writeToFile('README.md', markDownContent);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
}



// Function call to initialize app
init();
