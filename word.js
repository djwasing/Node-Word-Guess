var Letter = require("./letter");

class Word {
    constructor(dash) {
        this.dash = dash;
        this.wordArr = ["don", "rock", "house"];
    }
    displayDashes() {
        var randomNum = Math.floor(Math.random() * (this.wordArr.length - 0) + 0);
        var word = this.wordArr[randomNum];
        for (i = 0; i < word.length; i++) {
            var dashWord = word.replace(i, "_");
            console.log(dashWord);
        }

    }
}

var x = new Word;
x.displayDashes();  