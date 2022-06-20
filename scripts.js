
let playerWins = 0;
let compWins = 0;
let ties = 0;

const results = document.querySelector('#results');

function playRound(){
    if (playerSelection == "Rock") {
        let computerSelection = computerPlay();
        if (computerSelection == "Rock") {
            ties++;
            return("A tie!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
        }
        else if (computerSelection == "Paper") {
            compWins++;
            if (compWins ==5){
                return("Paper beast rock! Computer has won five times!!!")
            } else {
                return("You lose! Paper beats rock!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
            };
        }
        else if (computerSelection == "Scissors") {
            playerWins++;
            if (playerWins == 5){
                return("Rock beats scissors! You've won five times!!!")
            } else {
                return("You win! Rock beats scissors!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
            };
        }
    }
    if (playerSelection == "Paper") {
        let computerSelection = computerPlay();
        if (computerSelection == "Rock") {
            playerWins++;
            if (playerWins ==5){
                return("Paper beats rock! You've won five times!!!")
            } else {
            return("You win! Paper beats rock!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
            };
        }
        else if (computerSelection == "Paper") {
            ties++;
            return("A tie!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
        }
        else if (computerSelection == "Scissors") {
            compWins++;
            if (compWins == 5){
                return("Scissors beats paper! You've lost five times!!!")
            } else {
            return("You lose! Scissors beats paper!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
            };
        }
    }
    if (playerSelection == "Scissors") {
        let computerSelection = computerPlay();
        if (computerSelection == "Rock") {
            compWins++;
            if (compWins == 5){
                return("Rock beats scissors! You've lost five times!!!")
            } else {
            return("You lose! Rock beats scissors!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
            };
        }
        else if (computerSelection == "Paper") {
            playerWins++;
            if (playerWins == 5) {
                return("Scissors beats paper! You've won five times!!!")
            } else {
            return("You win! Scissors beats paper!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
            };
        }
        else if (computerSelection == "Scissors") {
            ties++;
            return("A tie!\nPlayer wins: " + playerWins + "\nComputer wins: " + compWins + "\nTies: " + ties);
        }
    }
    if (playerWins >= 5){
        let victory = document.createElement('div');
        victory.classList.add('victory');
        victory.textContent = "Game over! You won!";
        results.appendChild(victory);
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

const reset = document.querySelector('#reset');
reset.addEventListener("click", () => {
    window.location.reload();
});