// console.log(random, choice[random]);
let userChoice = null;
let userCount = 0;
let compCount = 0;
let rockButton = document.querySelector(".rockButton");
let paperButton = document.querySelector(".paperButton");
let scissorButton = document.querySelector(".scissorButton");
let gameButtons = document.querySelectorAll("button");
let userScore = document.querySelector(".userScore");
let computerScore = document.querySelector(".computerScore");
let resultText = document.querySelector(".resultText");

function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissor"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}



gameButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let compChoice = getComputerChoice();
    if (
      (e.target.textContent === "Rock" && compChoice === "Scissor") ||
      (e.target.textContent === "Paper" && compChoice === "Rock") ||
      (e.target.textContent === "Scissor" && compChoice === "Paper")
    ) {
      userCount++;
      userScore.textContent = `User: ${userCount}`
      console.log(userCount);
      console.log(compCount);
      resultText.textContent = `USER WINS ROUND: User played ${e.target.textContent} and Computed played ${compChoice}`;
    } else if (
      (e.target.textContent === "Scissor" && compChoice === "Rock") ||
      (e.target.textContent === "Rock" && compChoice === "Paper") ||
      (e.target.textContent === "Paper" && compChoice === "Scissor")
    ) {
      compCount++;
      computerScore.textContent = `Computer: ${compCount}`
      console.log(userCount);
      console.log(compCount);
      resultText.textContent = `Computer WINS ROUND: User played ${e.target.textContent} and Computed played ${compChoice}`;
    } else if (e.target.textContent === compChoice) {
      console.log("Draw");
      resultText.textContent = `DRAW: User played ${e.target.textContent} and Computed played ${compChoice}`;
    }
    if(userCount === 5){
        resultText.textContent = `User Wins`;
        gameButtons.forEach(dis => {
            dis.disabled = "true";
        });
    }else if (compCount === 5){
        resultText.textContent = `Computer Wins`;
        gameButtons.forEach(dis => {
            dis.disabled = "true";
        });
    }
  });
});
