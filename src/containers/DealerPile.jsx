import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import DeckImages from './DeckImages'
import GameCard from './GameCard'
import styled from 'styled-components'



class DealerPile extends Component {
    constructor(props) {
        super(props)
        this.gameCard = this.props.gameCard
    }


    componentWillReceiveProps(nextProps) {
        
    }
    

    render() {
        return (
            <div>
                <img src={DeckImages.Pile} style={{width: '100%', height: '100%'}}/>
            </div>
        )
    }
}


export default DealerPile