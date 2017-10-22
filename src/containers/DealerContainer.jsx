import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'

class DealerContainer extends Component {
    constructor(props){
        super(props)
        this.opponentImage = props.opponentImage
    }
    render() {
        return (
            <div>
                <img src={this.opponentImage}/>
            </div>
        )
    }
}

DealerContainer.propTypes = {
    opponentImage: PropTypes.string.isRequired
}

export default DealerContainer