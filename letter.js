class Letter {
    constructor(letter) {
    this.placeHolder = "_";
    this.letter = letter.toUpperCase();
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
            //console.log(userInput);
        }
    }
}

// var userInput = "b";
// let x = new Letter("c");
// x.checkGuess(userInput);

module.exports = Letter


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes