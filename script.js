let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drowGame = () => {
  msg.innerText = "Game was drow. Play again.";
  msg.style.backgroundColor= "#081b31"
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You Win your ${userChoice} beats ${compChoice}`;
    userScore++;
    userScorePara.innerText = userScore;
    msg.style.backgroundColor = "green";
  } else {
    msg.innerText = `You lost ${compChoice} beats your ${userChoice}`;
    console.log("You lose.");
    msg.style.backgroundColor = "red";
    compScore++;
    compScorePara.innerText= compScore;

  }
};

const playGame = (userChoice) => {
  console.log("user choice is:", userChoice);
  //Generate computer choice:
  const compChoice = getCompChoice();
  console.log("comp choice is :", compChoice);

  if (compChoice === userChoice) {
    drowGame();
  } else {
    let userWin = true;
    if (userChoice === "stone") {
      // compChoice = scissers, paper;
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // compChoice = stone, scissers;
      userWin = compChoice === "scissers" ? false : true;
    } else {
      // compChoice = stone, paper;
      userWin = compChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(`choice was clicked ${userChoice}`);
    playGame(userChoice);
  });
});

