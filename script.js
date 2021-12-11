//module for tic tac toe
const ticTacToe = (function(){
    //this section is for creating the gameboard
    //yes i know it looks ugly lol
    const _gameBoard = [];

    const _Cell = function(no){
        this.no = no
    };

    const _Cell1 = new _Cell(1);
    const _Cell2 = new _Cell(2);
    const _Cell3 = new _Cell(3);
    const _Cell4 = new _Cell(4);
    const _Cell5 = new _Cell(5);
    const _Cell6 = new _Cell(6);
    const _Cell7 = new _Cell(7);
    const _Cell8 = new _Cell(8);
    const _Cell9 = new _Cell(9);
    _gameBoard.push(_Cell1, _Cell2, _Cell3, _Cell4, _Cell5, _Cell6, _Cell7, _Cell8, _Cell9);

    //this section creates the gameboard based on the length of _gameBoard
    //this also inserts a function inside each cell of gameboard so players can input marks
    const _board = document.querySelector('.board');

    const createBoard = function(){
        for(let obj of _gameBoard){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = obj.no;
            cell.onclick = function(){
                if(_nextTurn === 'x'){
                    if(cell.innerText === ''){
                        cell.innerText = _playerOne.mark;
                        _changeTurn();
                        _checkWin();
                    } else{
                        return
                    }
                } else{
                    if(cell.innerText === ''){
                        cell.innerText = _playerTwo.mark;
                        _changeTurn();
                        _checkWin();
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

    //this section is for checking who wins
    //yeah this is ugly too LOL
    const _checkWin = function(){
        const one = document.getElementById('1');
        const two = document.getElementById('2');
        const three = document.getElementById('3');
        const four = document.getElementById('4');
        const five = document.getElementById('5');
        const six = document.getElementById('6');
        const seven = document.getElementById('7');
        const eight = document.getElementById('8');
        const nine = document.getElementById('9');

        if(one.innerText === _playerOne.mark && two.innerText === _playerOne.mark && three.innerText ===_playerOne.mark ||
           four.innerText === _playerOne.mark && five.innerText === _playerOne.mark && six.innerText ===_playerOne.mark ||
           seven.innerText === _playerOne.mark && eight.innerText === _playerOne.mark && nine.innerText ===_playerOne.mark ||
           one.innerText === _playerOne.mark && four.innerText === _playerOne.mark && seven.innerText ===_playerOne.mark ||
           two.innerText === _playerOne.mark && five.innerText === _playerOne.mark && eight.innerText ===_playerOne.mark ||
           three.innerText === _playerOne.mark && six.innerText === _playerOne.mark && nine.innerText ===_playerOne.mark ||
           one.innerText === _playerOne.mark && five.innerText === _playerOne.mark && nine.innerText ===_playerOne.mark ||
           seven.innerText === _playerOne.mark && five.innerText === _playerOne.mark && three.innerText ===_playerOne.mark){
            
            alert('lol');
        } else if(one.innerText === _playerTwo.mark && two.innerText === _playerTwo.mark && three.innerText ===_playerTwo.mark ||
                  four.innerText === _playerTwo.mark && five.innerText === _playerTwo.mark && six.innerText ===_playerTwo.mark ||
                  seven.innerText === _playerTwo.mark && eight.innerText === _playerTwo.mark && nine.innerText ===_playerTwo.mark ||
                  one.innerText === _playerTwo.mark && four.innerText === _playerTwo.mark && seven.innerText ===_playerTwo.mark ||
                  two.innerText === _playerTwo.mark && five.innerText === _playerTwo.mark && eight.innerText ===_playerTwo.mark ||
                  three.innerText === _playerTwo.mark && six.innerText === _playerTwo.mark && nine.innerText ===_playerTwo.mark ||
                  one.innerText === _playerTwo.mark && five.innerText === _playerTwo.mark && nine.innerText ===_playerTwo.mark ||
                  seven.innerText === _playerTwo.mark && five.innerText === _playerTwo.mark && three.innerText ===_playerTwo.mark){
                
                  alert('lol2');
        }else{
            return;
        }
    };

    //this section is a function for restarting the game
    const _newGame = function(){
        let playerOne = document.getElementById('X');
        let playerTwo = document.getElementById('O');

        playerOne.style.opacity = 1;
        playerTwo.style.opacity = 0.5;
        _board.innerText = '';
        createBoard();
    };

    const resetBtn = document.querySelector('.resetBtn');
    resetBtn.addEventListener('click', _newGame);

    return{
        createBoard,
        playerOneCard,
        playerTwoCard,
    };
})();

ticTacToe.createBoard();
ticTacToe.playerOneCard;
ticTacToe.playerTwoCard;