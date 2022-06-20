let playerWins = 0
let compWins = 0
let ties = 0

const btn = document.querySelectorAll('.btn');
btn.addEventListener('click', () => {
    if (playerWins == 5) {
        const playWon = document.createElement('div');
        playWon.classlist.add('won');
        playWon.textContent = ("You win! Player has achieved five wins!");
        interface.appendChild(playWon);
    };
    if (compWins == 5) {
        const playLost = document.createElement('div');
        playLost.classlist.add('lost');
        playLost.textContent = ("You lose! Computer has achieved five wins!");
        interface.appendChild(playLost);
    };
    playLog.textContent = ("Player wins: " + (playerWins));
    compLog.textContent = ("Computer wins: " + (compWins));
    tieLog.textContent = ("Ties: " + (ties));
});

const interface = document.querySelector('#interface');

const playLog = document.createElement('div');
playLog.classList.add('playLog');
playLog.textContent = ("Player wins: " + (playerWins));

interface.appendChild(playLog);

const compLog = document.createElement('div');
compLog.classList.add('compLog');
compLog.textContent = ("Computer wins: " + (compWins));

interface.appendChild(compLog);

const tieLog = document.createElement('div');
tieLog.classList.add('tieLog');
tieLog.textContent = ("Ties: " + (ties));

interface.appendChild(tieLog);

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

function playRoundRock() {
    let computerSelection = computerPlay();
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
function playRoundPaper() {
    let computerSelection = computerPlay();
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
function playRoundScissors() {
    let computerSelection = computerPlay();
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

const results = document.querySelector('#results');

const rock = document.querySelector('#rock');
rock.addEventListener("click", () => {
  results.textContent = (playRoundRock());
  });

const paper = document.querySelector('#paper');
paper.addEventListener("click", () => {
  results.textContent = (playRoundPaper());
  });

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", () => {
  results.textContent = (playRoundScissors());
  });

