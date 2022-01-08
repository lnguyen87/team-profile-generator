const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

function writeToFile(htmlText) {
    fs.writeFileSync('./dist/index.html', htmlText)
}

function init(userInput) {
    return inquirer.prompt([
        // Manager questions
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
            type: 'list',
            name: 'addTeamMember',
            message: "Which type of team members would you like to add?",
            choices: ['Engineer', 'Intern', 'None']
            
        },
        // .then(({ addTeamMember }) => {
        //     if (addTeamMember === 'Engineer') {
        //         engQuestions();
        //     } else {
        //     if (addTeamMember === 'Intern') {
        //         intQuestions();
        //     } else {
        //         endQuestions();
        //     }
        //     }
        // }),

        // Engineer questions
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name? (Required)",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter team engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's employee ID? (Required)",
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email? (Required)",
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's gitHub username? (gitHub URL will be attached)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's gitHub username!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addTeamMember',
            message: 'Would you like to add another team member?',
            default: false
        },

        // Intern questions
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name? (Required)",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log("Please enter team intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's employee ID? (Required)",
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log("Please enter intern's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email? (Required)",
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log("Please enter intern's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the intern attend? (Required)",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter intern's school!");
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