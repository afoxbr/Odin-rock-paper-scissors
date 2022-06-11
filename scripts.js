let playerWins = 0
let compWins = 0
let ties = 0

function computerPlay() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const computerResponse = getRandomInt(1,3);

    if (computerResponse == 1) {
            text = ("Rock")
    }
    if (computerResponse == 2) {
            text = ("Paper")
    }
    if (computerResponse == 3) {
            text = ("Scissors")
    }
    return(text);
}

function playRound(playerSelection, computerSelection) {
    var playerSelection = prompt("Please type either Rock, Paper, or Scissors. Spelling is important!");
    var computerSelection = computerPlay();
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Rock") {
            ties++;
            return("A tie!");
        }
        else if (computerSelection == "Paper") {
            compWins++;
            return("You lose! Paper beats rock!");
        }
        else if (computerSelection == "Scissors") {
            playerWins++;
            return("You win! Rock beats scissors!");
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            playerWins++;
            return("You win! Paper beats rock!");
        }
        else if (computerSelection == "Paper") {
            ties++;
            return("A tie!");
        }
        else if (computerSelection == "Scissors") {
            compWins++;
            return("You lose! Scissors beats paper!");
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Rock") {
            compWins++;
            return("You lose! Rock beats scissors!");
        }
        else if (computerSelection == "Paper") {
            playerWins++;
            return("You win! Scissors beats paper!");
        }
        else if (computerSelection == "Scissors") {
            ties++;
            return("A tie!");
        }
    }
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(playRound());
    }
    console.log("Player wins: " + playerWins);
    console.log("Computer wins: " + compWins);
    console.log("Ties: " + ties);
}