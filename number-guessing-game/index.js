// Number Guessing game
/*
- Randoma number generation(1 - 100)
- Player submits a guess
- Feedback: Too high, too low, or correct
- Track the number of attempts
- Limit the player to 10 attempts
- Restart the game

? Features to implement
Math.random() and Math.floor()
Conditional statements
Functions and return values
DOM manipulation and return values
State management
Input validation
*/

let attempts = 0
const MAX_ATTEMPTS = 10

const randomNumber = () => {
    const number = Math.floor(Math.random() * 100 + 1)
    return number
}

const secretNumber = randomNumber()

const checkGuess = (guess) => {
    if (guess > secretNumber) {
        return "Too high!"
    }
    else if (guess < secretNumber) {
        return "Too low!"
    }
    else {
        return "Correct! You win!"
    }
}

const playGame = (guess) => {
    if (attempts > MAX_ATTEMPTS) {
        return "Game is over"
    }
    attempts++
    const guessedNumber = checkGuess(guess)
    return guessedNumber
}


console.log(playGame(34), attempts)
console.log(secretNumber)