import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Choclatepage extends Component {
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
        console.log(this.state.chocs);
        return (
        <div className="container minContentHeight">
            {this.state.chocs.map(choc =>
                <Link to={`/chocolates/${choc.id}`} key={choc.id}>
                <div className="brandsList" style={{border:"2px solid darkred"}}>
                    <div className="ibrandsImg"><img src={choc.image}></img></div>
                    <div key={choc.id}>{choc.name}</div>
                </div>
                </Link>
            )}
        </div>)
    }
}