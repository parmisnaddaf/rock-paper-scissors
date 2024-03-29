let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function convertToWord(letter){
  if (letter === 'r')return "Rock";
  if (letter === 'p')return  "Paper";
  if (letter === 's')return  "Scissors";


}


function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallcompWord}. You win!`;
  userChoice_div = document.getElementById(user)
  userChoice_div.classList.add('green-glow');
  setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 400);
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(computer)}${smallcompWord} beats ${convertToWord(user)}${smallUserWord}. You lose!`;
  userChoice_div = document.getElementById(user)
  userChoice_div.classList.add('red-glow');
  setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 400);

}

function draw(user, computer) {
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(computer)}${smallcompWord} equals ${convertToWord(user)}${smallUserWord}. It's a draw!`;
  userChoice_div = document.getElementById(user)
  userChoice_div.classList.add('white-glow');
  setTimeout(function() { userChoice_div.classList.remove('white-glow')}, 400);

}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
    draw(userChoice, computerChoice);
      break;

  }


}

function main(){
  rock_div.addEventListener('click', function functionName() {
    game("r");
  })

  paper_div.addEventListener('click', function functionName() {
    game("p");
  })

  scissors_div.addEventListener('click', function functionName() {
    game("s");
  })
}
main();
