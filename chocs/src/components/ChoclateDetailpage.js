import React, { Component } from 'react'
import axios from 'axios';

export default class ChoclateDetailpage extends Component {
    state = {
        chocs:[]
    }
    componentDidMount() {
        axios.get('http://localhost:4000/chocolates').then(response => {
            const chocs = response.data;
            this.setState({chocs})
        })
    }
    render() {
        if (this.state.chocs.length > 0) {
            const choc = this.state.chocs[this.props.match.params.id-1];
            return (
                <div>
                    <div>
                        <img src={choc.image}></img>
                    </div>
                    <div>
                        {choc.name}<br />
                        {choc.desc}
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    ChoclateDetailpage
                </div>
            )
        }
    }
}
