function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(){
    return prompt("Enter one of the following choices: (0) rock (1) paper (2) scissors");

}

let humanScore = 0;
let computerScore = 0;

/*
0 : rock
1 : paper
2 : scissors
*/
function playRound(humanChoice, computerChoice){

    if (humanChoice==computerChoice){
        console.log("It's a tie!");
    }

    else if ((humanChoice==0 && computerChoice==2)|| 
    (humanChoice==1&&computerChoice==0) ||
    (humanChoice==2&&computerChoice==1)){
        console.log("Human wins!");
        humanScore+=1;
    }
    
    else{
        console.log("The computer wins!");
        computerScore+=1
    }
}

function playGame(rounds){
    for(i=0;i<rounds;i++){
        console.log("This is round "+(i+1)+"!");
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
}

playGame(5)