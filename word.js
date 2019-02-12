var Letter = require("./letter");

class Word {
    constructor(dash) {
        this.dash = dash;
        this.wordArr = ["don", "rock", "house"];
    }
    displayDashes() {
        var randomNum = Math.floor(Math.random() * (this.wordArr.length - 0) + 0);
        var word = this.wordArr[randomNum];
        var splitWord = word.split("");
        var dashWord = splitWord.map(i => "_");
        console.log(dashWord.join(" "));
    }
}

var x = new Word;
x.displayDashes();  