
var playerScore = 0;
var botScore = 0;

newGameEl = document.getElementById("newGame");
function resetScore() {
    document.getElementById("gameMsg").innerHTML = "Choose wisely!"
    playerScore = 0;
    botScore = 0;
    document.getElementById('scorePlayer').innerHTML = playerScore;
    document.getElementById('scoreBot').innerHTML = botScore;
}
newGameEl.addEventListener('click', resetScore);

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
    if(playerScore < 5 && botScore < 5) {
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
    } else if(playerScore == 5) {
        document.getElementById("gameMsg").innerHTML = "Congrats, you win! Select 'New Game' to play again."
    } else if(botScore == 5) {
        document.getElementById("gameMsg").innerHTML = "You lost :( select 'New Game' to try again."
    }
}
rockEl.addEventListener('click', rockClicked);

const paperEl = document.getElementById('paperButton');
let paperClicked = () => {
    if(playerScore < 5 && botScore < 5) {
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
    } else if(playerScore == 5) {
        document.getElementById("gameMsg").innerHTML = "Congrats, you win! Select 'New Game' to play again."
    } else if(botScore == 5) {
        document.getElementById("gameMsg").innerHTML = "You lost :( select 'New Game' to try again."
    }
}

paperEl.addEventListener('click', paperClicked);

const scissorsEl = document.getElementById('scissorsButton');
let scissorsClicked = () => {
    if(playerScore < 5 && botScore < 5) {
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
    } else if(playerScore == 5) {
        document.getElementById("gameMsg").innerHTML = "Congrats, you win! Select 'New Game' to play again."
    } else if(botScore == 5) {
        document.getElementById("gameMsg").innerHTML = "You lost :( select 'New Game' to try again."
    }
}
scissorsEl.addEventListener('click', scissorsClicked);


