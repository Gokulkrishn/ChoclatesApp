import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import {getBrands,getBrandsSuccess,getBrandsFailure} from '../actions';

class Brandpage extends Component {

    state = {
        brands:[]
    }
    componentDidMount() {
        const r = this.props.getBrands();
        debugger;
        console.log(r);
        axios.get('http://localhost:4000/brands')
        .then(response => {
            const brands = response.data;
            this.props.getBrandsSuccess(brands)
            //this.setState({brands})
        })
        .catch(error => {
          console.log(error);
        });
    }
    render() {
        return (
            <>
        {this.props.brands && (
            <div className="container minContentHeight">
        {this.props.brands.map(brand => 
          <Link to={`/brands/${brand.id}`} key={brand.id}>
              <div className="brandsList" style={{border:"2px solid darkred"}}>
                  <div className="ibrandsImg"><img  src={brand.logo}></img></div>
                  <div className="brandsName">{brand.name}</div>
              </div>
          </Link>
         )}
      </div>)}
          </>   
                    
                )
}
}
const mapStoreToProps = state => {
    return {brands:state.brands.brands}
}

const dispatchStoreToProps = dispatch => {
    return {
        getBrands:()=> dispatch(getBrands()),
        getBrandsSuccess:(response) => dispatch(getBrandsSuccess(response)),
        getBrandsFailure:(errorMsg) => dispatch(getBrandsFailure(errorMsg))
    
    }
}

// export default connect(mapStoreToProps,dispatchStoreToProps)(Brandpage);
// const dispatchStoreToProps = dispatch => {
export default connect(mapStoreToProps,dispatchStoreToProps)(Brandpage);