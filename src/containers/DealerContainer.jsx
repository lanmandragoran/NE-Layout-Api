import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import fetch from 'isomorphic-fetch'

class DealerContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            opponentImage: ''
        }
    }

    componentDidMount(){
        fetch(`https://robohash.p.mashape.com/index.php?text=${this.props.opponentName}`, {
            method: 'post',
            headers: {
                'X-Mashape-Key': 'RQwcdT4a3OmshfKbItKrRz6yrTwhp1CgFIKjsnm5Dho1e00ThX',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => {this.setState({opponentImage: json.imageUrl})});
    }

    render() {
        return (
            <div>
                <img src={this.state.opponentImage}/>
            </div>
        )
    }
}

export default DealerContainer