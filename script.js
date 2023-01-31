
const gameValues = ["rock", "paper", "scissors"];
let cancelledByUser = false;
let finished = false;
let userScore = 0;
let computerScore = 0;
const computerDecision = () => Math.floor(Math.random() * 3);
game();


function handleCancel(origin) {
    let cancelGame = confirm('Click Ok to confirm you want to leave the game');
    if (cancelGame) {
        cancelledByUser = true;
        return
    } else if (origin === 'game') {
        game();
    }
}

function getUserOption(callback) {
    let userSelection = prompt('Enter your choice, rock, paper or scissors');
    if (userSelection === null) {
        handleCancel("getUserOption");
        if (cancelledByUser) {
            finishGame();
        } else {
            callback
        }
    }
    if (cancelledByUser) {
        finished = true;
        return "game over";
    }
    if (userSelection !== null && gameValues.includes(userSelection.toLowerCase().trim())) {
        return userSelection.toLowerCase().trim();
    } else {
        if (userSelection !== null) {
            if (userSelection === "") {
                alert("Please type an option: 'rock','paper' or 'scissors")
            } else {
                alert(`${userSelection} is not a valid option, please write 'rock','paper' or 'scissors'`);
            }
        }
        callback
    }
}

function singleRound(computerOption, userOption) {
    if (userOption === gameValues[computerOption]) return "draw";
    switch (userOption) {
        case 'rock':
            if (gameValues[computerOption] === "paper") {
                return "computer"
            } else {
                return "user"
            };
        case 'paper':
            if (gameValues[computerOption] === "scissors") {
                return "computer"
            } else {
                return "user"
            };
        case 'scissors':
            if (gameValues[computerOption] === "scissors") {
                return "computer"
            } else {
                return "user"
            };
        case 'game over':
            return 'game over';
    }
}
function game() {
    let start = confirm('ROCK, PAPER, SCISSORS GAME\nYou only have to write rock, paper o scissors to play.\nThere are five rounds, draws count as a round.\nShall we start??');
    if (!start) {
        handleCancel('game');
    } else {
        alert('You can use Ctrl + Shift + I or right click and inspect at the end of the game to open the console and see game details.')
        let counter = 1;
        while (counter <= 5) {
            let computerOption = computerDecision();
            let userOption = getUserOption();
            let handResult = singleRound(computerOption, userOption);
            switch (handResult) {
                case "computer":
                    alert(`Computer chose ${gameValues[computerOption]}\nYou loose round ${counter}`);
                    console.log(`Computer chose ${gameValues[computerOption]}\nYou loose round ${counter}`);
                    counter++;
                    computerScore++
                    break
                case "user":
                    alert(`Computer chose ${gameValues[computerOption]}\nYou win round ${counter}`);
                    console.log(`Computer chose ${gameValues[computerOption]}\nYou win round ${counter}`);
                    counter++;
                    userScore++;
                    break
                case "draw":
                    alert(`Computer chose ${gameValues[computerOption]}\nYou draw round ${counter}`);
                    console.log(`Computer chose ${gameValues[computerOption]}\nYou draw round ${counter}`);
                    counter++;
                    break
                case "game over":
                    counter = 6;
                    break
            }
        }
        finishGame();
    }
}

function finishGame() {
    if (!finished) {

        if (cancelledByUser) {
            alert('You can try again whenever you want');
            console.log('You can try again whenever you want');
        } else {
            if (userScore > computerScore) {
                alert(`You win ${userScore} to ${computerScore}`);
                console.log(`You win ${userScore} to ${computerScore}`);
            } else if (userScore < computerScore) {
                alert(`You lost ${userScore} to ${computerScore}`);
                console.log(`You lost ${userScore} to ${computerScore}`);
            } else {
                alert(`You draw ${userScore} to ${computerScore}`);
                console.log(`You draw ${userScore} to ${computerScore}`);
            }
            let playAgain = confirm('Do you want to play again??');
            if (playAgain) {
                game();
            } else {
                alert("We can't wait to see you again!!!!")
            }
        }
        alert('End of the game!!!!!!!')
    }
}
