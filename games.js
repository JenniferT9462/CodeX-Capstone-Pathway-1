//Bootstrap Modal
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })


function guessTheAnimal() {
    let userChoice = prompt("Guess what Anna's favorite animal is!").toLowerCase();
    let annasChoice = "giraffe";

    // alert("Hello!");
    if (userChoice === annasChoice) {
       document.getElementById("game1Img").innerHTML = `<img src="img/giraffe.jpeg" style="width: 200px;">`;
       document.getElementById("game1Header").innerHTML = "Yay!! You Won!";
    
       document.getElementById("game1Paragraph").innerHTML = "You guessed it! Anna's fav animal is a Giraffe!";
       
    } else {
        alert("Guess Again!! HINT: They have really long necks!!");
        return 
    }


}
game1btn.onclick = guessTheAnimal;


// Tic Tac Toe
//Setting up variables
const board = document.getElementById('board')
const squares = document.getElementsByClassName('square')
// Players are in an array to easily access later
const players = ['X', 'O']
// Start with player 'X'...0 is the index for players which is 'X'
let currentPlayer = players[0]
// Create a Header that will display turns and results
const endMessage = document.createElement('h2')
// Start with 'X' set margin and align text
endMessage.textContent = `X's turn!`
endMessage.style.marginTop = '30px'
endMessage.style.textAlign='center'
// 
board.after(endMessage)
// winning combos
const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// For loop thru squares on the board...squares is now an array of the classes
for(let i = 0; i < squares.length; i++){
    // Make squares clickable
    squares[i].addEventListener('click', () => {
        // if there is nothing in the squares return until clicked
        if(squares[i].textContent !== ''){
            return
        } //Setting the content of the square in squares to currentPlayer
        squares[i].textContent = currentPlayer
        // Checking to see if the currentPlayer that has a winning combo...w/ a function checkWin()
        if(checkWin(currentPlayer)) {
            // Whoever the winner is...print out results
            endMessage.textContent=`Game over! ${currentPlayer} wins!`
            return
        } //Check for a tie w/checkTie function
        if(checkTie()) {
            //Print out tied game
            endMessage.textContent= `Game is tied!`
            return
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] 
        if(currentPlayer == players[0]) {
            endMessage.textContent= `X's turn!`
        } else {
            endMessage.textContent= `O's turn!`
        }     
    })   
}

//Function to check winning combos
function checkWin(currentPlayer) {
    for(let i = 0; i < winning_combinations.length; i++){
        const [a, b, c] = winning_combinations[i]
        if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
            return true
        }
    }
    return false
}
//Function to check for a tie
function checkTie(){
    for(let i = 0; i < squares.length; i++) {
        if(squares[i].textContent === '') {
            return false;
        }
    }
    return true
}
//Function to reset the board
function restartButton() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
    }
    endMessage.textContent=`X's turn!`
    currentPlayer = players[0]
}

