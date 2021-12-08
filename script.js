//tic tac toe module
const ticTacToe = (function(){
    const gameBoard = function(num){
        const container = document.querySelector('.container');
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = 'X';

        container.appendChild('cell');
    }

    return{
        gameBoard,
    }

})();

ticTacToe.gameBoard(9);