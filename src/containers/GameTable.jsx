import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import DeckImages from './DeckImages'
import GameCard from './GameCard'
import styled from 'styled-components'

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

export default GameTable