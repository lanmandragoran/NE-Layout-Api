import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Game from './Game'

class App extends Component{
    constructor(){
        super()
        this.state = {
            playerName: 'Chris',
            opponentName: 'Philip John Reidy'
        }
    }

    render() {
        return (
            <Game opponentName={this.state.playerName} opponentName={this.state.opponentName}/>
        )
    }
}

export default App

