
var playerScore = 0;
var botScore = 0;


let botChoice = () => {
    let randomInt = Math.floor((Math.random()*3)+1);
    let result;
    switch(randomInt) {
        case 1: result = 'rock';
        document.getElementById("vsImg2").src = "./images/rock-icon-8519.png";
        break;
        case 2: result = 'paper';
        document.getElementById("vsImg2").src = "./images/paper-48284.png";
        break;
        case 3: 
        result = 'scissors';
        document.getElementById("vsImg2").src = "./images/scissors-icon-25521.png";
        break;
    }
    return result;
}

const rockEl = document.getElementById('rockButton');
let rockClicked = () => {
    let opponentChoice = botChoice();
    document.getElementById("vsImg1").src = "./images/rock-icon-8519.png";
    switch(opponentChoice) {
        case 'rock': null;
        break;
        case 'paper': botScore++;
        break;
        case 'scissors': playerScore++;
        break;
    }
    document.getElementById('scorePlayer').innerHTML = playerScore;
    document.getElementById('scoreBot').innerHTML = botScore;
}
rockEl.addEventListener('click', rockClicked);

const paperEl = document.getElementById('paperButton');
let paperClicked = () => {
    let opponentChoice = botChoice();
    document.getElementById("vsImg1").src = "./images/paper-48284.png";
    switch(opponentChoice) {
        case 'rock': playerScore++;
        break;
        case 'paper': null;
        break;
        case 'scissors': botScore++;
        break;
    }
    document.getElementById('scorePlayer').innerHTML = playerScore;
    document.getElementById('scoreBot').innerHTML = botScore;
}
paperEl.addEventListener('click', paperClicked);

const scissorsEl = document.getElementById('scissorsButton');
let scissorsClicked = () => {
    let opponentChoice = botChoice();
    document.getElementById("vsImg1").src = "./images/scissors-icon-25521.png";
    switch(opponentChoice) {
        case 'rock': botScore++;
        break;
        case 'paper': playerScore++;
        break;
        case 'scissors': null;
        break;
    }
    document.getElementById('scorePlayer').innerHTML = playerScore;
    document.getElementById('scoreBot').innerHTML = botScore;
}
scissorsEl.addEventListener('click', scissorsClicked);