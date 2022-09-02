// console.log(random, choice[random]);


function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function rock(){
    const computerChoice = getComputerChoice();

}

function rockPaperScissor(playerSelection, computerSelection){
    if((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() == 'scissor') 
    || (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock')
    || (playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'paper')){
        console.log(`User played ${playerSelection} and Computer played ${computerSelection}: User wins`);
    }
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        console.log(`User played ${playerSelection} and Computer played ${computerSelection}: Draw`);
    }else if(playerSelection.toLowerCase() !== 'rock' || playerSelection.toLowerCase() !== 'scissor' || playerSelection.toLowerCase() !== 'paper'){
        alert("Incorrect Input");
    }
    else{
        console.log(`User played ${playerSelection} and Computer played ${computerSelection}: Computer wins`);
    }
}

rockPaperScissor(playerSelection, getComputerChoice());