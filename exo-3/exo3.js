// you can write js here
console.log('exo-3');

//const myPlayerInput = prompt("Your choice ( rock, paper, scissors) ?")
const allChoices = ['rock', 'paper', 'scissors'];

function getPlayerInput(playerInput){

    playerInput = playerInput.toLowerCase();
    
    if(playerInput === "rock" || playerInput === "paper" || playerInput === "scissors"){
        return playerInput;
    } else {
        console.error("choix pas dans la liste");
    }
}

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * allChoices.length);
    return randomIndex;
}

function findWinner(computerChoice, playerChoice){

    console.log(playerChoice);
    console.log(computerChoice);


    if (computerChoice === playerChoice){
        return "Tied";
    }
    if (playerChoice === "bomb") {
        return "WIN cheater =)";
    }
    if ((playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper")){
        return "Won"
    
    }
    return "Lost";
}

function playGame(){
    let uChoice = prompt("Your choice(rock, paper, scissors) ?")
    return findWinner(getComputerChoice(), getPlayerInput(uChoice));
    }

console.log(playGame());