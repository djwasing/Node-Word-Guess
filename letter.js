class Letter {
    constructor(letter) {
    this.placeHolder = "_";
    this.letter = letter;
    this.guessedYet = false;
    }
    guessFunc() {
        if (this.guessedYet === true) {
            return this.letter;
        }else{
            return this.placeHolder;
        }
    }
    checkGuess(userInput) {
        if (userInput === this.letter) {
            this.guessedYet = true;
            console.log(this.letter);
        }
    }
}

// var userInput = "b";
// let x = new Letter("a");
// x.checkGuess(userInput);

module.exports = Letter


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes