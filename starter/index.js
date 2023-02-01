const fs = require("fs");
const questions = require("./utils/questions");
//const inquirer = require("inquirer");

function init() {
  // creates readme.md file if it does not exist
  const pathToFile = "./test.txt";
  fs.appendFile("readme.md", "", (error) => (error ? console.log(error) : ""));
  // tests if file path is true, then proceeds further
  if (pathToFile) {
    questions();
  }
}

init();