import Layout from '../components/Layout';

class TicTacToe extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
            currentPageIndex:2,
            title: 'TicTacToe Game',
			initialGame: ['','','','','','','','',''],
            player1: 'X',
            player2: 'O'
        }
        this.clickSquare = this.clickSquare.bind(this)
        // console.log('TicTacToe: ', props);
	}

	componentWillMount() {
        // console.log('TicTacToe componentWillMount')
        this.setState({
            messages: [
                {id:0, kind:'danger', text:'Lorem ipsum dolor sic amet...', lede:'TicTacToe Danger'},
                {id:1, kind:'warning', text:'Lorem ipsum dolor sic amet...', lede:'TicTacToe Warning'}
            ],
            currentPlayer: this.state.player1,
            currentGame: this.state.initialGame
        })
	}

	componentDidMount() {
        // console.log('TicTacToe componentDidMount')

        // const gameSquareEls = document.querySelectorAll('.square')
        // console.log(gameSquareEls)
        // for (let index = 0; index < gameSquareEls.length; index++) {
        //     const element = gameSquareEls[index]
        //     element.addEventListener('click',this.clickSquare.bind(this))
        // }

        const board = document.querySelectorAll('.board')[0]
        board.addEventListener('click',this.clickSquare)

    }

	componentWillUnmount() {
        // console.log('componentWillUnmount')
    }

    clickSquare(e) {
        // console.log('currentGame: ', this.state.currentGame);
        // console.log('initialGame: ', this.state.initialGame);
        // console.info('this: ', this)
        // console.info('e: ', e)
        // console.dir(e)
        // console.info('e.type: ', e.type)
        // console.info('e.target: ', e.target)
        // console.info('e.currentTarget: ', e.currentTarget)
        // console.assert(e.currentTarget === this)
        const index = parseInt(e.target.id,10)
        // console.log('clickSquare: ', index)
        // console.log(this.state.currentGame[index]);

        if (this.state.currentGame[index] === '') {
            console.log('square empty')
            // only change if empty square

        // if (e.target.innerHTML !== this.state.player1 && e.target.innerHTML !== this.state.player2) {
            // only change if not an 'X' or an 'O' in square

            // console.log('square '+(index+1)+' got an '+this.state.currentPlayer)
            this.state.currentGame[index] = this.state.currentPlayer
            this.setState({currentGame: this.state.currentGame}, this.changePlayer)
        } else {
            alert('square already played')
        }
        // console.log(this.state.currentGame)
    }

    changePlayer() {
        // console.log('changePlayer')
        this.state.currentPlayer = (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1
        if (this.checkForWinner()) {

            // lock the board
            const board = document.querySelectorAll('.board')[0]
            board.removeEventListener('click', this.clickSquare)
            
        } else {
            // console.log('keep playing')
        }
        // console.log(this.state)
    }

    submitBoard() {
        console.log('submitBoard')
        // this.setState({
        //     currentPlayer: this.state.player1,
        //     currentGame: this.state.initialGame
        // })
        // console.log('currentGame: ', this.state.currentGame);
        // console.log('initialGame: ', this.state.initialGame);
    }

    resetBoard() {
        console.log('resetBoard')
        this.setState({
            currentPlayer: this.state.player1,
            currentGame: this.state.initialGame
        })
        this.makeNewGame()
        // console.log('currentGame: ', this.state.currentGame);
        // console.log('initialGame: ', this.state.initialGame);
    }

    checkForWinner() {
        // console.log('checkForWinner')

        const boardState = this.state.currentGame
        console.log('boardState: ',boardState)

        // const boardSquares = Array.prototype.slice.call(document.querySelectorAll('.square'))
        // console.log('boardSquares: ',boardSquares)
        
        // const boardSymbols = boardSquares.map(square => square.innerHTML)
        // console.log('boardSymbols: ',boardSymbols)

        const winningPlays = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        return winningPlays.find(combo => {
            // take each combination of winning plays and check against the board state
            console.log('boardState[combo[0]]: ', boardState[combo[0]])
            console.log('boardState[combo[1]]: ', boardState[combo[1]])
            console.log('boardState[combo[2]]: ', boardState[combo[2]])
            if (boardState[combo[0]] !== '') {
                console.log('NOT empty square: ', boardState[combo[0]])
                if (boardState[combo[0]] == boardState[combo[1]] && boardState[combo[1]] == boardState[combo[2]]) {
                    // if all squares at indexes indicated in combo have the same symbol, then there's a winner!
                    // console.log('combo: ',combo)
                    for (let index = 0; index < combo.length; index++) {
                        const square = document.querySelectorAll('.board li')[combo[index]]
                        // console.log(square);
                        square.classList.add('winner')
                    }
                    alert('WINNER!')
                    return boardState[combo[0]]
                } else {
                    return false
                }
            } else {
                console.log('empty square')
            }
        })
    }

    makeNewGame() {
        return this.state.currentGame
        .map((square,i) => <li className={'square d-flex justify-content-center align-items-center '+(square?'occupied':'')} key={i} id={i}>{square}</li>)
    }

    render() {

        // onClick={this.clickSquare.bind(this)}
        let gameSquares = this.makeNewGame()

        return (<Layout msgs={this.state.messages} activePageIndex={this.state.currentPageIndex}>
			<div className="TicTacToe module">
                <div className="table">
                    <ul className="board d-flex flex-row flex-wrap justify-content-start align-items-start">
                        {gameSquares}
                    </ul>
                </div>
                <hr/>
                <form className="form">
                    <fieldset className="form-group">
                        <label htmlFor="gameState">Game Status
                            <input className="form-control" type="text" name="gameState" value={this.state.currentGame} readOnly />
                        </label>
                    </fieldset>
                    <fieldset className="form-group">
                        <input className="form-control btn btn-wide btn-secondary" type="reset" onClick={this.resetBoard.bind(this)} />
                        {/* <input className="form-control btn btn-primary" type="submit" onClick={this.submitBoard.bind(this)} /> */}
                    </fieldset>
                </form>
            </div>
			<style jsx global>{`
.TicTacToe {
    // border:0.25em solid green;
    width:100%;
    height:100%;
    background:rgba(0,0,255,0.25);
    margin:0;
    padding:1rem;
}
.table {
    width:100%;
    height:100%;
    background:rgba(255,0,0,0.25);
    margin:0;
    padding:1rem;
}
.board {
    border:0.25em outset lightgrey;
    background:rgba(0,0,0,0.25);
    box-sizing:border-box;
    font-size:2em;
    width:100%;
    height:100%;
    list-style-type:none;
    list-style-position:inside;
    list-style-image:none;
    text-indent:0;
    margin:0;
    padding:0;
}
.square {
    border:0.25em inset lightgrey;
    background:rgba(255,255,255,0.75);
    box-sizing:border-box;
    width:25vmin;
    height:25vmin;
    margin:0;
    padding:0;
}
.square:hover {
    background:rgba(255,255,127,1);
}
.square.winner {
    background:rgba(127,255,127,0.75) !important;
}
			`}</style>
		</Layout>)
	}
};

export default TicTacToe;