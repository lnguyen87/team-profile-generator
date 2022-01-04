const inquirer = require('inquirer');
const fs = require('fs');

function writeToFile(htmlText) {
    fs.writeFileSync('./dist/index.html', htmlText)
}