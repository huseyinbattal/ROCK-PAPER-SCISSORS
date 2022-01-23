let computerScore = 0;
let playerScore = 0;
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerShowIcon = document.querySelector(".player i");

const computerShowIcon = document.querySelector(".computer i");

const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
const text = document.getElementById("demo");
const result = document.getElementById("result");

const playGame=(e)=>{
    const randomNum = Math.floor(Math.random() * randomClasses.length);
    console.log("hello");
    console.log(e.target.className);
    playerShowIcon.className = e.target.className;
    computerShowIcon.className = randomClasses[randomNum];

    if (playerShowIcon.className === computerShowIcon.className) {
        result.innerHTML = "It's a Tie !";
        result.style.color = "orange";
    }else if((playerShowIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2])
    || (playerShowIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1])
    || (playerShowIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0])){
        playerScore++;
        pScore.innerHTML = playerScore;
        result.innerHTML = "You Win! ";
        result.style.color = 'rgb(1, 146, 1)';
    }else if((playerShowIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]) 
     || (playerShowIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0])
     || (playerShowIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2])){
      computerScore++;
        cScore.innerHTML = computerScore;
        result.innerHTML = "Computer Win!";
        result.style.color = 'red';
}
}


rock.addEventListener("click", playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);

