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
    message: "Choose your License:",
    choices: ['MIT', 'GPLv2', 'Apache']
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
    # ${data.title}
    
    ## Description
    ${data.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## License
    The license used for this project is ${data.license}.

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}
    
    ## Questions
    Any questions or concerns feel free to reach out.
    Github: [${data.github} (https://github.com/${data.github})
    Email: ${data.email}
    `;

    return content;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
