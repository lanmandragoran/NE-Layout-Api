import React, {Component} from 'react'
import ReactCardFlip from 'react-card-flip'
import DeckImages from './DeckImages'
import styled from 'styled-components'
import './Images.css'

class GameCard extends Component {
    constructor() {
        super()
        this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
     
      handleClick(e) {
        e.preventDefault();
        this.setState({ isFlipped: !this.state.isFlipped });
      }
    render() {
            return (

              <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div key="front">
              <img style={{height: '100%', width: '100%'}}
                src={DeckImages.Back}
                onClick={this.handleClick}
              />
            </div>
            <div key="back">
              <img style={{height: '100%', width: '100%'}}
                src={DeckImages.Hearts.Jack}
                onClick={this.handleClick}
              />
            </div>
              </ReactCardFlip>
        )
    }
}

export default GameCard
