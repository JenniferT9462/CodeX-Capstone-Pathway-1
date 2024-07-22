//Bootstrap Modal
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

function guessTheAnimal() {
  //Assign userChoice to prompt that asks for a guess. Set to lowercase to include user choice being in caps.
  let userChoice = prompt(
    "Guess what Anna's favorite animal is!"
  ).toLowerCase();
  //Set annasChoice to giraffe
  let annasChoice = "giraffe";

  //Check if the userChoice is correct and display a winning message or another prompt saying to guess again w/a hint.
  if (userChoice === annasChoice) {
    document.getElementById(
      "game1Img"
    ).innerHTML = `<img src="img/giraffe.jpeg" style="width: 200px;">`;
    document.getElementById("game1Header").innerHTML = "Yay!! You Won!";

    document.getElementById("game1Paragraph").innerHTML =
      "You guessed it! Anna's fav animal is a Giraffe!";
  } else {
    alert("Guess Again!! HINT: They have really long necks!!");
    return;
  }
}
//Add event listener
game1btn.onclick = guessTheAnimal;

// Tic Tac Toe
//Setting up variables
const gameBoard = document.getElementById("gameBoard");
const tiles = document.getElementsByClassName("tile");
// Players are in an array to easily access later
const players = ["X", "O"];
// Start with player 'X'...0 is the index for players which is 'X'
let currentPlayer = players[0];
// Create a Header that will display turns and results. So they stay inside the modal.
const gameMessage = document.createElement("h2");
// Start with 'X' set margin and align text
gameMessage.textContent = `X's turn!`;
gameMessage.style.marginTop = "30px";
gameMessage.style.textAlign = "center";
// To add the created element <h2> that is now called gameMessage will be displayed after the board.
gameBoard.after(gameMessage);
// winning combos in an array to access later. Each index will be another array of [a,b,c].
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
//Function to check winning combos...w/the parameter of currentPlayer
function checkWin(currentPlayer) {
  //Loop thru winningCombos
  for (let i = 0; i < winningCombos.length; i++) {
    //Set each index to [a,b,c] to represent the combinations
    const [a, b, c] = winningCombos[i];
    //Check if each tile of any of the winningCombos have the currentPlayer's content 'X' or 'O'...
    //So if the currentPlayer has any of the combinations by checking all
    //the [a] tiles && all the [b] tiles && [c] tiles to see if the player has ALL tiles per combo.
    //for each index in winningCombos(we are still in the for loop) 
    //Check if the tiles with the index of a value, b value, and c value matches the players. I used .textContent to check for 'X' or 'O'
    if (
      tiles[a].textContent === currentPlayer &&
      tiles[b].textContent === currentPlayer &&
      tiles[c].textContent === currentPlayer
    ) {
      console.log([a,b,c]) 
      return true;
    }
  }
  return false;
}
//Function to check for a tie
function checkTie() {
  //Loop thru tiles..for each square
  for (let i = 0; i < tiles.length; i++) {
    //check if there content is empty...a tie will end with the whole board full and no combinations met
    if (tiles[i].textContent === "") {
      return false;
    }
  }
  return true;
}
// For loop thru tiles on the board...tiles is now an array of the classes
for (let i = 0; i < tiles.length; i++) {
  // Make tiles clickable inside the for loop.
  // I found it was the easiest way to do the same thing to multiple elements of the same class.
  tiles[i].addEventListener("click", () => {
    //if the tile's content is not empty continue with the game
    if (tiles[i].textContent !== "") {
      return;
    }
    //Assign currentPlayer to the current content  'X' or 'O'.
    // So since tiles is an array we want to access one element at a time
    tiles[i].textContent = currentPlayer;
    
    //Function to find the winner based on winning combos. Function above.
    //if checkWin(currentPlayer) is true...So if there is a winner
    if (checkWin(currentPlayer)) {
      //Print who the winner is
      gameMessage.textContent = `Game over! ${currentPlayer} wins!`;
      
      return;
    }
    //Function to check for a tie. Function above.
    //if checkTie() is true
    if (checkTie()) {
      //Print out 
      gameMessage.textContent = `It's a Tie!`;
      return;
    }
    //Swap between players to get currentPlayer with a ternary operator to assign currentPlayer
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    if (currentPlayer == players[0]) {
      gameMessage.textContent = `X's Turn!`;
    } else {
      gameMessage.textContent = `O's Turn!`;
    }
  });
}

//Function to reset the board
function restartButton() {
  //Loop thru tiles to set them to empty
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].textContent = "";
  }
  //Start beginning message and set currentPlayer back to 'X'
  gameMessage.textContent = `X's turn!`;
  currentPlayer = players[0];
}



//AFTER SUBMISSION...

//Add strike-thru or color to winningCombo after game. 

  

