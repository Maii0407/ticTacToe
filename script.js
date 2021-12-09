//module for tic tac toe
const ticTacToe = (function(){
    const _gameBoard = new Array(9);

    const _board = document.querySelector('.board');

    const createBoard = function(){
        for(i = 0; i < _gameBoard.length; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.onclick = function(){
                if(cell.innerText === ''){
                    cell.innerText = _playerOne.mark;
                } else{
                    return
                }
            };

            _board.appendChild(cell);
        }
    };

    const _Player = function(name, mark){
        this.name = name;
        this.mark = mark;
    };

    const _playerOne = new _Player('Player One', 'X');
    const _playerTwo = new _Player('Player Two', 'O');

    const _cardContainer = document.querySelector('.card-container');

    const createPlayerOneCard = function(){
        let cardOne = document.createElement('div');
        cardOne.classList.add('cardOne');
        cardOne.textContent = `${_playerOne.name}: ${_playerOne.mark}`;

        _cardContainer.appendChild(cardOne);
    }

    return{
        createBoard,
        createPlayerOneCard,
    };
})();

ticTacToe.createBoard();
ticTacToe.createPlayerOneCard();