import React, { Component } from 'react';
import axios from 'axios';

export default class BrandDetailpage extends Component {
    state = {
        brands:[]
    }
    componentDidMount() {
        axios.get('http://localhost:4000/brands')
        .then(response => {
            const brands = response.data
            this.setState({brands})
        })
        .catch(error => {
          console.log(error);
        });
    }
    render() {
        if (this.state.brands.length > 0) {
            const brand = this.state.brands[this.props.match.params.id-1];
            return (
                <div>
                    <div> <img src={brand.logo}></img></div>
                    <div>
                        {brand.name}<br />
                        {brand.desc}
                    </div>
                </div>
            )    
        } else {
            return (<div> Detailed page for Brand</div>)
        }
    }
}
