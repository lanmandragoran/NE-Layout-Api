import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import GameCard from './GameCard'
import DeckImages from './DeckImages'
import DealerContainer from './DealerContainer'
import './Images.css'

const App = () => {

    return (
    <div>
    <div style={{position: 'absolute', marginLeft: '35%', marginTop: '-4.5%', zIndex: '5'}}>
    <DealerContainer opponentName={'Alice Ma'}/>
    </div>
    <div className="table">
    <img src={DeckImages.Table}/>
      </div>
      <div style={{height: '7%', width: '7%', marginLeft: '40%', paddingTop: '45%', position: 'absolute'}}>
          <GameCard/>
      </div>
      <div style={{height: '7%', width: '7%', marginLeft: '50%', paddingTop: '45%', position: 'absolute'}}>
          <GameCard/>
      </div>
      <div style={{height: '7%', width: '7%', marginLeft: '60%', paddingTop: '45%', position: 'absolute'}}>
          <GameCard/>
      </div>
    </div>
    )
}

export default App

