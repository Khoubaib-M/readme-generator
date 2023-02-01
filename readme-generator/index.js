const fs = require("fs");
const questions = require("./utils/questions");

function init() {
  const pathToFile = "./test.txt";
  fs.appendFile("readme.md", "", (error) => (error ? console.log(error) : ""));

  if (pathToFile) {
    questions();
  }
}

init();