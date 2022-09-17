const ComputerChoiceDisplay = document.getElementById('computer-choice');
const UserChoiceDisplay = document.getElementById('user-choice');
const ResultDisplay = document.getElementById('result');
const PossibleChoices = document.querySelectorAll('.button');

let userChoice;
let computerChoice;
let result;

/**==== Get id of userChoice from PossibleChoices ====**/
PossibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  UserChoiceDisplay.innerHTML = userChoice;

  GenerateComputerChoice();
  getResult();
}));

/**=== Another example with if(){} else{} condition ===**/

// const GenerateComputerChoice = () => {

// RandomNumber for ComputerChoice
//   const RandomNumber = Math.floor(Math.random() * 3) + 1;
//   console.log(RandomNumber);

// if (RandomNumber === 1) {
//   computerChoice = 'rock';
// } else if (RandomNumber === 2) {
//   computerChoice = 'paper';
// } else {
//   computerChoice = 'scissors';
// }

// ComputerChoiceDisplay.innerHTML = computerChoice;
// };

/**====================================================**/

const GenerateComputerChoice = () => {

  // RandomNumber for ComputerChoice with (.length)
  const RandomNumber = Math.floor(Math.random() * PossibleChoices.length) + 1;

  switch (RandomNumber) {
    case 1:
      computerChoice = 'rock';
      break;
    case 2:
      computerChoice = 'paper';
      break;
    case 3:
      computerChoice = 'scissors';
      break;

    default:
      alert("Unknown value !");
      break;
  }

  // Display ComputerChoice in html document
  ComputerChoiceDisplay.innerHTML = computerChoice;
};

function getResult() {

  // Set condition forEach case to display the correct result
  if (computerChoice === userChoice) {
    result = "It's a match !";
  } else if (computerChoice === 'rock' && userChoice === 'paper') {
    result = "You did it !";
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = "Maybe next time !";
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    result = "You lose !";
  } else if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = "You win !";
  } else if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = "Very good !";
  } else if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = "Sorry !";
  }

  ResultDisplay.innerHTML = result;
}