import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import DeckImages from './DeckImages'
import GameCard from './GameCard'
import styled from 'styled-components'
import './Images.css'

const TableStyle = styled.div`width: 90%;
                    height: 80%;
                    margin-left: 5%;
                    margin-top: 7%;
                    margin-right: 5%;
                    margin-bottom: 0%;
                    padding-bottom: 0%;
                    background: no-repeat;
                    z-index: 0;
                    position: absolute;
                    margin-top: 3.5%;`

const GameTable = () => {
    return (
        <div>
       
            <TableStyle>
                <img src={DeckImages.Table}/>
            </TableStyle>
            
            <div className='ele' style={{height: '6%', width: '6%', position: 'absolute', marginLeft: '31%', marginTop: '14%', zIndex: '6'}}>
                    <GameCard/>
            </div>
            

            <div style={{height: '6%', width: '6%', position: 'absolute', marginLeft: '32%', marginTop: '14%', zIndex: '7'}}>
                <GameCard/>
            </div>

            <div style={{height: '6%', width: '6%', position: 'absolute', marginLeft: '32%', marginTop: '14%', zIndex: '8',}}>
                <GameCard/>
            </div>
        </div>
    )
}

export default GameTable