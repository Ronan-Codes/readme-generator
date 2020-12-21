// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const writeFile = require('./utils/writeFile.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Please provide your GitHub username (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'inpur',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the project\'s title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for users.'
        },
        {
           type: 'input',
           name: 'usage',
           message: 'Provide instructions on how users can utilize the project.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license should your project have?',
            choices: [ 'APACHE', 'MIT', 'ISC', 'GPL', 'BSD', 'NONE' ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelines for contributing to the project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any test instructions'
        }
    ])
};

/*
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
*/
promptUser()
.then(userData => {
    return generateMarkdown(userData);
})
.then(readmeContent => {
    return writeFile(readmeContent);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch(err => {
    console.log(err);
});
