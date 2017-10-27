import React, {Component} from 'react'
import ReactDOM from 'react'
import fetch from 'isomorphic-fetch'
import DealerContainer from './DealerContainer'
import GameTable from './GameTable'
import DealerPile from './DealerPile'

class Game extends Component{
    constructor(props){
        super(props)
        this.state = {
            deckId: '',
            newRound: false,
            opponentImage: '',
            opponentName: props.opponentName,
            playerName: props.playerName,
            generatedHand: [],
            drawnCard: '',
            numRounds: 0,
            currentRound: 0,
            numDecks: 1
        }
    }

    componentDidMount() {
        fetch(`https://robohash.p.mashape.com/index.php?text=${this.state.opponentName}`, {
            method: 'post',
            headers: {
                'X-Mashape-Key': 'RQwcdT4a3OmshfKbItKrRz6yrTwhp1CgFIKjsnm5Dho1e00ThX',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => {this.setState({opponentImage: json.imageUrl})})
    }

    componentShouldUpdate(prevProps) {
        
    }

    render() {
        const oppImage = this.state.opponentImage
        const deckIdentifier = this.state.deckId
        const opponentName = this.state.opponentName
        return (
            <div>
                <div style={{position: 'absolute', marginLeft: '35%', marginTop: '-4.5%', zIndex: '5', height:'27%', width: '27%'}}>
                   { oppImage ? <DealerContainer opponentName={opponentName} opponentImage={oppImage}/> : <h1 style={{color: 'white'}}>'Opponent Rendering'</h1> }
                </div>
                <div style={{position: 'absolute', marginLeft: '30%', marginTop: '19%', zIndex: '5', width: '7.5%', height: '7.5%'}}>
                    <DealerPile/>
                </div>
                    <div>
                        {deckIdentifier ? <h1 style={{color: 'white'}}>{`Deck ID: ${deckIdentifier}`}</h1> : <h1 style={{color: 'white'}}> 'Waiting on Deck' </h1> }
                        <GameTable/>
                    </div>
            </div>
        )
    }


}


export default Game