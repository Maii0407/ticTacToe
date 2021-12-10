//module for tic tac toe
const ticTacToe = (function(){
    const _gameBoard = new Array(9);

    const _board = document.querySelector('.board');

    //creates gameboard based on gameboard object length
    const createBoard = function(){
        for(i = 0; i < _gameBoard.length; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.onclick = function(){
                if(_nextTurn === 'x'){
                    if(cell.innerText === ''){
                        cell.innerText = _playerOne.mark;
                        _changeTurn();
                    } else{
                        return
                    }
                } else{
                    if(cell.innerText === ''){
                        cell.innerText = _playerTwo.mark;
                        _changeTurn();
                    } else{
                        return
                    }
                }
            };

            _board.appendChild(cell);
        }
    };

    //the method to change turns also display current player turn
    let _nextTurn = 'x';

    const _changeTurn = function(){
        let playerOne = document.getElementById('X');
        let playerTwo = document.getElementById('O');

        if(_nextTurn === 'x'){
            _nextTurn = 'o';
            playerTwo.style.opacity = 1;
            playerOne.style.opacity = 0.5;
        } else{
            _nextTurn = 'x';
            playerOne.style.opacity = 1;
            playerTwo.style.opacity = 0.5;
        }
    };

    //factory function to create players
    const _Player = function(name, mark){
        this.name = name;
        this.mark = mark;
    };

    const _playerOne = new _Player('Player One', 'X');
    const _playerTwo = new _Player('Player Two', 'O');

    const _cardContainer = document.querySelector('.card-container');

    //creates player cards for the display turn
    const _PlayerCard = function(obj){
        let card = document.createElement('div');
        card.classList.add('card');
        card.id = obj.mark;
        card.textContent = `${obj.name}: ${obj.mark}`;

        _cardContainer.appendChild(card);
    };

    const playerOneCard = new _PlayerCard(_playerOne);
    const playerTwoCard = new _PlayerCard(_playerTwo);

    return{
        createBoard,
        playerOneCard,
        playerTwoCard,
    };
})();

ticTacToe.createBoard();
ticTacToe.playerOneCard;
ticTacToe.playerTwoCard;