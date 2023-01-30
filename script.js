
const gameValues = ["rock", "paper", "scissors"];

function singleRound(computerOption) {
    let userSelection = prompt('Enter your choice, rock, paper or scissors');
    if (userSelection === null) return "cancelled";
    console.log(`You chose ${userSelection.toLocaleLowerCase().trim()}`)
    if (userSelection.toLocaleLowerCase().trim() === gameValues[computerOption]) return "draw";
    switch (userSelection.toLowerCase().trim()) {
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
        default:
            return ` ${userSelection}  `; /*added some spaces to avoid user resposes 'computer','user','draw' & 'cancelled' */
    }
}
let cancelledByUser = false;
let userScore = 0;
let computerScore = 0;
let start = confirm('ROCK, PAPER, SCISSORS GAME\nYou only have to write rock, paper o scissors to play.\nThere are five rounds, draws count as a round.\nShall we start??');
alert('You can use Ctrl + Shift + I or right click and inspect at the end of the game to open the console and see game details.')
if (!start) {
    cancelledByUser = true;
} else {
    let counter = 1;
    while (counter <= 5) {
        let computerOption = Math.floor(Math.random() * 3);
        let handResult = singleRound(computerOption);
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
            case "cancelled":
                let cancelGame = confirm('Click Ok to confirm you want to leave the game');
                if (cancelGame) {
                    cancelledByUser = true;
                    counter = 6;
                }
                break
            default:
                alert(`${handResult.trim()} is not a valid option, please choose rock, paper o scissors`);
                break
        }
    }
}
if (cancelledByUser) {
    alert('You can try again whenever you want');
    console.log('You can try again whenever you want');
} else if (userScore > computerScore) {
    alert(`You win ${userScore} to ${computerScore}`);
    console.log(`You win ${userScore} to ${computerScore}`);
} else if (userScore < computerScore) {
    alert(`You lost ${userScore} to ${computerScore}`);
    console.log(`You lost ${userScore} to ${computerScore}`);
} else {
    alert(`You draw ${userScore} to ${computerScore}`);
    console.log(`You draw ${userScore} to ${computerScore}`);
}

alert('end of the game!!!!!!!')
