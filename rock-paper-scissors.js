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
        return "It's a tie!";
    }

    else if ((humanChoice==0 && computerChoice==2)|| 
    (humanChoice==1&&computerChoice==0) ||
    (humanChoice==2&&computerChoice==1)){
        humanScore+=1;
        return "Human wins!";
    }
    
    else{
        computerScore+=1;
        return "The computer wins!";
    }
}

const buttons = document.querySelectorAll('.choice');
const resultContainer = document.getElementById('result');

let compScore = document.getElementById("compScore");
let humScore = document.getElementById("humScore");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = parseInt(button.dataset.choice);
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);

    resultContainer.textContent = result;

    compScore.textContent = "Computer Score: " + computerScore;
    humScore.textContent = "Human Score: " + humanScore;

    if(computerScore==5){
        resultContainer.textContent = "Game Over! The Computer Wins :(";
    }
    else if (humanScore==5){
        resultContainer.textContent = "Game Over! You win! :)";
    }
  });
});
