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
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use."
},
{
    type: "input",
    name: "contributing",
    message: "Enter collaborators, if any, and any other sources used."
},
{
    type: "input",
    name: "tests",
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
function writeToFile(fileName, data) {
    const content = `
    # ${title}
    
    ## Description
    ${description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    
    ## License
    The license used for this project is ${license}.

    ## Contributing
    ${contributing}

    ## Tests
    ${tests}
    
    ## Questions
    Any questions or concerns feel free to reach out.
    ${github}
    ${email}
    `
    // fs.appendFile('README.md, (err) => err ? console.error(err) : console.log("Logged!"))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
