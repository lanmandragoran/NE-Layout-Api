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
        
    }

    }
}