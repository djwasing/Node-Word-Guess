var Word = require('./word');
var inquirer = require('inquirer');

var words = ["BOWL", "JUMP", "KENNEL", "RUN", "PLAY", "FOOD", "BONE", "LEASH", "COLLAR", "TREATS", "LOVE", "FURRY", "PUPPY"];
var guessedLetters = [];
var secretWord = {};
var tries = 10;

//var prompt = inquirer.createPromptModule();
//console.log("index running");
wordGenerator();

function wordGenerator() {
    var randomNum = Math.floor(Math.random() * (words.length - 0) + 0);
    var randomWord = words[randomNum];
    secretWord = new Word(randomWord);
    secretWord.splitLetters = randomWord.toUpperCase().split("");
    secretWord.displayDashes();
    getGuess();
}


function getGuess() {
    inquirer
    .prompt(
        [
            {
                name: "letter", message: "Guess a letter"
            },
            // {
            //     name: "xyz", message: "What is your name?"
            // }
        ]
    ).then(guess => {
        //console.log(guess);
        var ltr = guess.letter.toUpperCase();
        if (guessedLetters.includes(ltr)) {
            console.log("You have already guessed that letter. Pick another letter.");
        }else{
            secretWord.userGuess(ltr);
            guessedLetters.push(ltr);
            if (secretWord.splitLetters.includes(ltr)) {
                console.log("Correct guess!");
            }else{
                console.log("Wrong guess, guess again");
                tries--;
                console.log("Remaining tries: " + tries);
            }

        }
        checkTries();
    });

}

function checkTries() {
    if (!secretWord.display.includes("_")) {
        console.log("Woof Woof! Well done! You win!")
        console.log("The word was: " + secretWord.dash);
        console.log("----------------------------")
        playAgain();
    }else if (tries > 0){
        console.log("You guessed: " + guessedLetters.join(", "));
        getGuess();
    }else{
        console.log("You ran out of tries. The correct word was: " + secretWord.dash);
        playAgain();
    }
}

function playAgain() {
    inquirer
    .prompt(
        [
            {
                name: "playAgain", 
                message: "Do you want to play again?", 
                type: "confirm", 
                default: false
            }
        ]
    ).then(answer => {
        if (answer.playAgain == true) {
            tries = 10;
            guessedLetters = [];
            secretWord.display = [];
            splitLetters = [];
            guessedLetters = [];
            wordGenerator();
        }else{
            console.log("Game over. Thanks for playing!")
            console.log("------------------------------")
        }
    })
}

