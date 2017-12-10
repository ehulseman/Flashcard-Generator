// var BasicCard = require("./BasicCard.js");
// var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");

//Constructor for Basic Card
var BasicCard = function (front, back) {
    this.front = front;
    this.back = back;
};

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

//Constructor for Cloze Card
var ClozeCard = function (fullText, cloze, partial) {
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = partial;

};

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington", " ... was the first president of the United States.");

//Logic for asking the user which card type they want to try
inquirer.prompt([{
    type: "list",
    name: "cardType",
    message: "Basic Flash Card or Cloze Flash Card?",
    choices: ["Basic Flash Card", "Cloze Flash Card"]
}]).then(function (startFlashCards) {
    //Logic for if they choose Basic Flash Card
    if (startFlashCards.cardType === "Basic Flash Card") {
        console.log("You chose " + startFlashCards.choices);
        console.log("Question: " + firstPresident.front);
        inquirer.prompt([{
            type: "input",
            name: "answer",
            message: "What is your answer?"
        }]).then(function (response) {
            if (response.answer === firstPresident.back) {
                console.log("That's correct!");
            } else {
                console.log("Sorry, try again!");
            }
        });
        //Logic for if they choose Cloze Flash Card
    } else if (startFlashCards.cardType == "Cloze Flash Card") {
        console.log("You chose " + startFlashCards.choices);
        console.log(firstPresidentCloze.partial);
        inquirer.prompt([{
            type: "input",
            name: "answer",
            message: "What is your answer?"
        }]).then(function (response) {
            if (response.answer === firstPresidentCloze.cloze) {
                console.log("That's correct!");
            } else {
                console.log("Sorry, try again!");
            }
        });
    }
});