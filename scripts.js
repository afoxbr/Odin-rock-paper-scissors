
let playerWins = 0;
let compWins = 0;
let ties = 0;
function playRound(){
    if (playerSelection == "Rock") {
        let computerSelection = computerPlay();
        if (computerSelection == "Rock") {
            ties++;
            return("A tie!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
        }
        else if (computerSelection == "Paper") {
            compWins++;
            return("You lose! Paper beats rock!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
        }
        else if (computerSelection == "Scissors") {
            playerWins++;
            return("You win! Rock beats scissors!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
        }
    }
    if (playerSelection == "Paper") {
        let computerSelection = computerPlay();
        if (computerSelection == "Rock") {
            playerWins++;
            return("You win! Paper beats rock!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
        }
        else if (computerSelection == "Paper") {
            ties++;
            return("A tie!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
        }
        else if (computerSelection == "Scissors") {
            compWins++;
            return("You lose! Scissors beats paper!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
        }
    }
    if (playerSelection == "Scissors") {
        let computerSelection = computerPlay();
        if (computerSelection == "Rock") {
            compWins++;
            return("You lose! Rock beats scissors!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
        }
        else if (computerSelection == "Paper") {
            playerWins++;
            return("You win! Scissors beats paper!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
        }
        else if (computerSelection == "Scissors") {
            ties++;
            return("A tie!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
        }
    }
}
function computerPlay() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    const computerResponse = getRandomInt(1,3);
    
    if (computerResponse == 1) {
            text = ("Rock");
    }
    if (computerResponse == 2) {
            text = ("Paper");
    }
    if (computerResponse == 3) {
            text = ("Scissors");
    }
    return(text);
}
const results = document.querySelector('#results');

const rock = document.querySelector('#rock');
rock.addEventListener("click", () => {
  results.textContent = (playRound(playerSelection = "Rock"));
  });

const paper = document.querySelector('#paper');
paper.addEventListener("click", () => {
    results.textContent = (playRound(playerSelection = "Paper"));
    });

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", () => {
    results.textContent = (playRound(playerSelection = "Scissors"));
    });

