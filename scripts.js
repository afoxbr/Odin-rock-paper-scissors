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
    var playerSelection = prompt("Choose.");
    var computerSelection = computerPlay();
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Rock") {
            return("A tie!");
        }
        if (computerSelection == "Paper") {
            return("You lose! Paper beats rock!");
        }
        if (computerSelection == "Scissors") {
            return("You win! Rock beats scissors!");
        }
    }
    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            return("You win! Paper beats rock!");
        }
        if (computerSelection == "Paper") {
            return("A tie!");
        }
        if (computerSelection == "Scissors") {
            return("You lose! Scissors beats paper!");
        }
    }
    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Rock") {
            return("You lose! Rock beats scissors!");
        }
        if (computerSelection == "Paper") {
            return("You win! Scissors beats paper!");
        }
        if (computerSelection == "Scissors") {
            return("A tie!");
        }
    }
}