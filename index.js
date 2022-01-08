const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

function writeToFile(htmlText) {
    fs.writeFileSync('./dist/index.html', htmlText)
}

function init(userInput) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name? (Required)",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID? (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter manager's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number? (Required)",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter manager's office number!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: "What is the manager's employee ID? (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter manager's employee ID!");
                    return false;
                }
            }
        },
    ]).then(userInput => {
        generateHTML(userInput);
        const htmlText = generateHTML(userInput);
        writeToFile(htmlText);
        console.log(htmlText);
    })
}

// Function call to initialize app
init();