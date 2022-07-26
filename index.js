// TODO: Include packages needed for this application
const inquire = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Motive',
        message: 'What was your motivation?'
    }, 
    {
        type: 'input',
        name: 'Reason',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'Solution',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'Lesson',
        message: 'What did you learn?'
    },
    {
        type: 'input',
        name: 'Distinction',
        message: 'What makes your project stand out?'
    },
    {
        type: 'input',
        name: 'Title',
        message: 'Project title'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Project description'   
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Installation instructions'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Project usage'
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Project contribution'
    },
    {
        type: 'input',
        name: 'License',
        message: 'Project license'
    },
    {
        type: 'input',
        name: 'User',
        message: 'Project creator'
    },
    {
        type: 'input',
        name: 'Link',
        message: 'License link'
    }

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, function(error){
       if(error) {
           return console.log("error ", error)
       } else {
           console.log("success")
       }
   }) 

}

// TODO: Create a function to initialize app
function init() {
    return inquire.prompt(questions)
        .then(function(data){
            writeToFile("README.md", generateMarkdown(data))
            console.log(data)
        })
}

// Function call to initialize app
init();
