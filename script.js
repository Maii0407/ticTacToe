//module for tic tac toe
const ticTacToe = (function(){
    //this section is for creating the gameboard
    //yes i know it looks ugly lol
    const _gameBoard = [];

    const Cell = function(no){
        this.no = no
    };

    const Cell1 = new Cell(1);
    const Cell2 = new Cell(2);
    const Cell3 = new Cell(3);
    const Cell4 = new Cell(4);
    const Cell5 = new Cell(5);
    const Cell6 = new Cell(6);
    const Cell7 = new Cell(7);
    const Cell8 = new Cell(8);
    const Cell9 = new Cell(9);
    _gameBoard.push(Cell1, Cell2, Cell3, Cell4, Cell5, Cell6, Cell7, Cell8, Cell9);

    //this section creates the gameboard based on the length of _gameBoard
    //this also inserts a function inside each cell of gameboard so players can input marks
    const _board = document.querySelector('.board');

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

    //this section is for determining current player turn
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

    //this section is factory function to generate players
    const _Player = function(name, mark){
        this.name = name;
        this.mark = mark;
    };

    const _playerOne = new _Player('Player One', 'X');
    const _playerTwo = new _Player('Player Two', 'O');

    const _cardContainer = document.querySelector('.card-container');

    //this section is factory function to generate player cards for the display
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