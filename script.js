
//Stores board info, adds player choice to board, clears board, checks for winning conditions
const gameBoard = (() => {
    let board = ["X","X","O","0","0","X","X","O","X"];

    const addSelection = (selection, index) =>{
        board[index] = selection
        console.table(board);
    };
    const clearBoard = () => {
        board = ["","","","","","","","",""];
        console.log(board);
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
            console.log(true);
            return true;
        }
        if(board[2] == board[4] && board[2] == board[6] && board[2] != '')
        {
            return true;
        }
        //checks for any unused tiles, if none, its a tie
        if(!board.some(tile => tile == '')){
            return console.log("tie");
        }
    
        else{
            console.log(false);
            return false;
        } 
    };
    return {addSelection, clearBoard, checkWin};


})();

gameBoard.checkWin();


//Prompt actions, player chooses symbol/name, determines player's turn, 
const gameController = (() => {
    let XName = "";
    let OName = "";
    let playerTurn = 0;

    const name = (symbol, name) => {
        if(symbol == "X"){
            XName = name;
        }
        else{
            OName = name;
        }
    };
    const turn = () => {
        playerTurn = playerTurn ? 0: 1;
        return playerTurn;
    };


    return{name, turn};
})();

gameController.turn();

const player = (name) => {

};