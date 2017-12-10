// Creates a BasicCard Constructor
var ClozeCard = function (fullText, cloze, partial) {
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = partial;

};

// var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington", " ... was the first president of the United States.");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States."
// console.log(firstPresidentCloze.partial); 

// // "George Washington was the first president of the United States."
// console.log(firstPresidentCloze.fullText); 


module.exports = ClozeCard;