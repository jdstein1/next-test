import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';

class TicTacToe extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
            currentPageIndex:2,
            title: 'TicTacToe Game',
            player1: '╳',
            player2: '◯',
            currentPlayer: '◯',
            initialGame: ['','','','','','','','','']
        }
        this.clickSquare = this.clickSquare.bind(this)
	}

	componentWillMount() {
        // console.log('TicTacToe componentWillMount')
        this.setState({
            currentGame: JSON.parse(JSON.stringify(this.state.initialGame)),
            messages: [
                {id:1, kind:'success', text:`${ this.state.currentPlayer } wins!`, lede:'Winner!'},
                {id:2, kind:'primary', text:'Nobody won...', lede:'Cats game!'},
                {id:3, kind:'danger', text:'Lorem ipsum dolor sic amet...', lede:'TicTacToe Danger'},
                {id:4, kind:'info', text:'Lorem ipsum dolor sic amet...', lede:'TicTacToe Info'},
                {id:5, kind:'warning', text:'Lorem ipsum dolor sic amet...', lede:'TicTacToe Warning'}
            ]
        })
	}

	componentDidMount() {
        // console.log('TicTacToe componentDidMount')
        const board = document.querySelectorAll('.board')[0]
        board.addEventListener('click',this.clickSquare)
    }

    clickSquare(e) {
        console.log('START clickSquare', e)
        const index = parseInt(e.target.id,10)
        if (this.state.currentGame[index] === '') {
            // add symbol
            // console.log('square empty')
            this.state.currentGame[index] = this.state.currentPlayer
            this.setState({currentGame: this.state.currentGame}, this.changePlayer)
        } else {
            // do not add symbol
            // console.log('square already played')
        }
    }

    changePlayer() {
        console.log('START changePlayer')
        // this.state.currentPlayer = (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1
        this.setState({
            currentPlayer: (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1
        })

        if (this.checkForWinner()) {

            // lock the board
            const board = document.querySelectorAll('.board')[0]
            board.removeEventListener('click', this.clickSquare)
            
        } else {
            // console.log('keep playing')
        }
    }

    resetBoard() {
        console.log('START resetBoard')
        this.setState({
            currentPlayer: this.state.player1,
            currentGame: JSON.parse(JSON.stringify(this.state.initialGame))
        })
        const board = document.querySelectorAll('.board')[0]
        board.addEventListener('click', this.clickSquare)
        // console.log('currentGame: ', this.state.currentGame);
        // console.log('initialGame: ', this.state.initialGame);
    }

    checkForWinner() {
        console.log('START checkForWinner')

        const boardState = this.state.currentGame
        console.log('boardState: ',boardState)
        let possibleWins = 0;

        const winningPlays = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        console.log('winningPlays.length: ',winningPlays.length);
        
        return winningPlays.find(combo => {
            // take each combination of winning plays and check against the board state
            // console.log('combo: ', combo)
            // console.log('boardState[combo[0]]: ', boardState[combo[0]])
            // console.log('boardState[combo[1]]: ', boardState[combo[1]])
            // console.log('boardState[combo[2]]: ', boardState[combo[2]])
            if (boardState[combo[0]] !== '') {
                // console.log('NOT empty square: ', boardState[combo[0]])
                if (boardState[combo[0]] == boardState[combo[1]] && boardState[combo[1]] == boardState[combo[2]]) {
                    // if all squares at indexes indicated in combo have the same symbol, then there's a winner!
                    // console.log('combo: ',combo)
                    for (let index = 0; index < combo.length; index++) {
                        const square = document.querySelectorAll('.board li')[combo[index]]
                        // console.log(square);
                        square.classList.add('winner')
                    }
                    alert( this.state.currentPlayer + ' IS THE WINNER!' )
                    return boardState[combo[0]]
                } else {
                    possibleWins++
                    // console.log('NO winner yet...possibleWins: ',possibleWins)
                    if (possibleWins === winningPlays.length) {
                        alert('CATS GAME!')
                    }
                    return false
                }
            } else {
                console.log('empty square')
            }
        })
    }

    render() {

        return (
            <Layout msgs={this.state.messages} activePageIndex={this.state.currentPageIndex}>
                <div className="tictactoe module">
                    <div className="table">
                        <ul className="board d-flex flex-row flex-wrap justify-content-center align-items-center">
                            {this.state.currentGame.map((square,i) => <li className={'square d-flex justify-content-center align-items-center '+(square?'occupied':'')} key={i} id={i}>{square}</li>)}
                        </ul>
                    </div>
                    <form className="form">
                        <fieldset className="form-group">
                            <label htmlFor="gameState">Game State
                                <input className="form-control" type="text" name="gameState" value={this.state.currentGame} readOnly />
                            </label>
                        </fieldset>
                        <fieldset className="form-group">
                            <input className="form-control btn btn-wide btn-secondary" type="reset" onClick={this.resetBoard.bind(this)} />
                        </fieldset>
                    </form>
                </div>
                <style jsx>{`
                    .tictactoe {
                        margin:0 auto;
                        padding:1rem;
                    }
                    .table {
                        width:auto;
                        height:auto;
                        margin:0 auto;
                        padding:1rem;
                    }
                    .board {
                        // border:0.125vmin outset #fed;
                        border:0.125vmin solid #fff;
                        border-radius:3vmin;
                        // background:#fc9;
                        font-size:2em;
                        width:64vmin;
                        height:64vmin;
                        list-style-type:none;
                        list-style-position:inside;
                        list-style-image:none;
                        text-indent:0;
                        margin:0 auto;
                        padding:0;
                    }
                    .square {
                        // border:0.125vmin inset #fed;
                        border:0.125vmin solid #fff;
                        border-radius:2vmin;
                        background:#fed;
                        box-shadow: 0 0 5rem 0rem #fc9 inset;
                        color:black;
                        width:21vmin;
                        height:21vmin;
                        font-size:15vmin;
                        margin:0.125vmin;
                        padding:0;
                    }
                    .square:hover {
                        background:#fc9;
                    }
                    .square.winner {
                        background:rgba(127,255,127,0.75) !important;
                        box-shadow: 0 0 5rem 0 #fff inset;
                    }
                `}</style>
            </Layout>
        )
	}
};

export default TicTacToe;