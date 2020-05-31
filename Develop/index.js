const inquirer = require ("inquirer");
const generatedMarkdown = require ("./utils/generateMarkdown");
const fs = require ("fs");

const questions = [
    {
        type: "input",
        message: "Enter a Project Title",
        name: "title"
    },

    {
        type: "input",
        message: "Enter Project Description",
        name: "projectDesc"
    },

    {
        type: "input",
        message: "Enter Table of Content",
        name: "tableOfContent"
    },

    {
        type: "input",
        message: "Installation",
        name: "installation"
    },

    {
        type: "input",
        message: "Usage",
        name: "usage"
    },

    {
        type: "input",
        message: "License",
        name: "license"
    },

    {
        type: "input",
        message: "Contributing",
        name: "contributing"
    },

    {
        type: "input",
        message: "Tests",
        name: "tests"
    },

    {
        type: "input",
        message: "Questions",
        name: "questions"
    }

];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, generatedMarkdown (data), function (error) {

        if (error) console.log(error);
        else console.log("Success!");

    });
        
}

function init() {

    inquirer
        .prompt(questions)
        .then((response) => {            

            writeToFile("../README.md", response);

        });

}

init();
