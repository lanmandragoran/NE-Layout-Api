import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class DealerContainer extends Component {
    constructor(props){
        super(props)
        this.opponentImage = props.opponentImage
        this.opponentName = props.opponentName
    }
    render() {
        return (
            <div>
                <img src={this.opponentImage} style={{height: '100%', width: '100%'}}/>
            </div>
        )
    }
}

DealerContainer.propTypes = {
    opponentImage: PropTypes.string.isRequired
}

export default DealerContainer