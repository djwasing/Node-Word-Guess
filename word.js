

var Letter = require("./letter");

class Word {
    constructor(dash) {
        this.dash = dash;
        this.splitLetters = [];
        this.display = [];
        this.convertedLetters = [];
    }
    displayDashes() {
        console.log("-----------------------------------------------------")
        console.log('Welcome to DOG WORD GUESS! Guess the dog-themed word:')
        for (var i = 0; i < this.splitLetters.length; i++) {
            var ltr = new Letter(this.splitLetters[i])
            if (ltr.letter === " ") {
                ltr.guessedYet = true;
            }
            this.convertedLetters.push(ltr);
            this.display.push(ltr.guessFunc());
        }

        console.log(this.display.join(" ") + "\n");
    }
    userGuess(guess) {
        var ltr = guess.toUpperCase();
        //console.log("line32", ltr);
        this.display = [];
        for (var i = 0; i < this.convertedLetters.length; i++) {
            if (this.convertedLetters[i].letter === ltr) {
                this.convertedLetters[i].checkGuess(guess);
                //console.log("line38", this.convertedLetters);
            }
            this.display.push(this.convertedLetters[i].guessFunc());
        };
        console.log(this.display.join(" ") + "\n");

    }
}

// var x = new Word;
// x.displayDashes();  


module.exports = Word