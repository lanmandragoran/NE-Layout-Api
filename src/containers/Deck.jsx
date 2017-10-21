import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import fetch from 'isomorphic-fetch'

class Deck extends Component{
    constructor(props){
        super(props)
        this.state = {
            deckId: '',
            dealerHand: [],
            playerHand: [],
            hasId: false
        }
    }
    componentDidMount() {
        fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numDecks}`)
        .then(response => response.json())
        .then(json => this.setState({deckId: json.deck_id, hasId: true}))
    }

    componentDidUpdate(){
        if(this.state.hasId) {
            
        }
    }
}