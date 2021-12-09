//module for tic tac toe
const ticTacToe = (function(){
    const gameBoard = new Array(9);

    const _board = document.querySelector('.board');

    const createBoard = function(){
        for(i = 0; i < gameBoard.length; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = 'x';

            _board.appendChild(cell);
        }
    };

    return{
        gameBoard,
        createBoard,
    };
})();

ticTacToe.createBoard();