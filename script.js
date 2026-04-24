// Select all boxes
const cells = document.querySelectorAll(".cell");

// Select result text
const statusText = document.getElementById("status");

// Current player
let currentPlayer = "X";

// Game board
let board = ["", "", "", "", "", "", "", "", ""];

// Game active
let gameActive = true;

// Winning combinations
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Add click event to every cell
cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

function handleClick() {

    const index = this.getAttribute("data-index");

    if(board[index] !== "" || !gameActive){
        return;
    }

    board[index] = currentPlayer;

    this.textContent = currentPlayer;

    checkWinner();

    if(currentPlayer === "X"){
        currentPlayer = "O";
    }else{
        currentPlayer = "X";
    }
}

// Check winner
function checkWinner(){

    for(let i = 0; i < winPatterns.length; i++){

        let a = winPatterns[i][0];
        let b = winPatterns[i][1];
        let c = winPatterns[i][2];

        if(board[a] !== "" && board[a] === board[b] && board[a] === board[c]){

            statusText.textContent = board[a] + " Wins!";
            gameActive = false;
            return;

        }

    }

    // Check draw
    if(!board.includes("")){
        statusText.textContent = "Draw Game!";
        gameActive = false;
    }
}

// Restart game
function restartGame(){

    board = ["","","","","","","","",""];

    cells.forEach(cell => {
        cell.textContent = "";
    });

    statusText.textContent = "";

    currentPlayer = "X";

    gameActive = true;
}