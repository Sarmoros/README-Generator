// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project."
},
{
    type: "input",
    name: "installation instructions",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
},
{
    type: "input",
    name: "Usage information",
    message: "Provide instructions and examples for use."
},
{
    type: "input",
    name: "contribution guidelines",
    message: "Enter collaborators, if any, and any other sources used."
},
{
    type: "input",
    name: "test instructions",
    message: "Write tests for your application."
},
{
    type: "list",
    name: "license",
    message: "Choose your license:"
},
{
    type: "input",
    name: "github",
    message: "Enter your GitHub username."
},
{
    type: "input",
    name: "email",
    message: "Enter your email address."
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
