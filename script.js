
//Stores board info, adds player choice to board, clears board, checks for winning conditions
const gameBoard = (() => {
    let board = ["","","","","","","","",""]; // example of tie: ["X","X","O","O","O","X","X","O","X"]
    const tiles = document.querySelectorAll(".tile");

    const addSelection = (selection, index) =>{
        board[index] = selection
    };
    const clearBoard = () => {
        board = ["","","","","","","","",""];
        gameController.displayMessage("Player X goes first!")
        if(gameController.turn() == "O")
        {
            gameController.turn();
        }
        buildBoard();
    };
    //returns true false or tie
    const checkWin = () => {    
        //checks for row matches
        if(board[0] == board[1] && board[0] == board[2] && board[0] != '')
        {
            return true;
        }
        if(board[3] == board[4] && board[3] == board[5] && board[3] != '')
        {
            return true;
        }
        if(board[6] == board[7] && board[6] == board[8] && board[6] != '')
        {
            return true;
        }
        //checks for column matches
        if(board[0] == board[3] && board[0] == board[6] && board[0] != '')
        {
            return true;
        }
        if(board[1] == board[4] && board[1] == board[7] && board[1] != '')
        {  
            return true;
        }
        if(board[2] == board[5] && board[2] == board[8] && board[2] != '')
        {     
            return true;
        }
        //checks for diagonal matches
        if(board[0] == board[4] && board[0] == board[8] && board[0] != '')
        {
            return true;
        }
        if(board[2] == board[4] && board[2] == board[6] && board[2] != '')
        {
            return true;
        }
        //checks for any unused tiles, if none, its a tie
        if(!board.some(tile => tile == ''))
        {
            return "tie";
        }
    
        else
        {
            return false;
        } 
    };

    const buildBoard = () =>{
        tiles.forEach((tile) => {
            let index = tile.dataset.index;
            tile.textContent = board[index];
        });
    }

    return {addSelection, clearBoard, checkWin, buildBoard};

})();

//Prompt actions, player chooses symbol/name, determines player's turn, 
const gameController = (() => {
    let playerTurn = "X";

    const turn = () => {
        playerTurn = playerTurn == "X" ? "0": "X";
        return playerTurn;
    };

    const displayMessage = (message) => {
        const info = document.querySelector(".info");
        info.textContent = message;
    };

    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((tile) => {
        tile.addEventListener('click', () => {
            if(tile.textContent != ''){
                return;
            }
            let selection = tile.dataset.index;
            if(playerTurn == 0){
                gameBoard.addSelection("O", selection);
                gameBoard.buildBoard();
                if(gameBoard.checkWin() === true){
                    displayMessage("Congrats O's win!");
                    return;
                }
            }
            else{
                gameBoard.addSelection("X", selection);
                gameBoard.buildBoard();
                if(gameBoard.checkWin() === true){
                    displayMessage("Congrats X's win!");
                    return;
                }
            }
            if(gameBoard.checkWin() === 'tie'){
                displayMessage("It's a Tie!");
                return;
            }
            turn();
            displayMessage(`Player ${playerTurn}'s turn`)
        })
    });

    return{turn, displayMessage};
})();

const player = (name) => {
    
};

gameBoard.buildBoard();
