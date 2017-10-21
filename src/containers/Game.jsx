import React, {Component} from 'react'
import ReactDOM from 'react'
import fetch from 'isomorphic-fetch'

public class Game extends Component{
    constructor(){
        super()
        this.state = {
            deckId: '',
            newRound: false,
            
        }
    }
}