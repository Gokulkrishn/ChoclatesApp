import React, { Component } from 'react'
import {connect} from 'react-redux';
import {axios} from 'axios';

import {getSignUpFirstName,getSignUpLastName,getSignUpEmail,getSignUpPassword} from '../actions';

class SignupPage extends Component {
    handleInputChange = (e) => {
        if (e.target.name === "fname" ) {
            return this.props.getFName(e.target.value)
        } else if(e.target.name === "lname") {
            return this.props.getLName(e.target.value)
        } else if(e.target.name === "email") {
            return this.props.getEmail(e.target.value)
        } else if(e.target.name === "pswd") {
            return this.props.getPswd(e.target.value)
        }
    }

    handleSubmit= (e) => {
        var bodyFormData = new FormData();
        bodyFormData.set({"firstName": "X", "lastName": "K", "email": "XYZ@gmail.com", "password": "1234"});
        e.preventDefault();
            axios({
            method: 'POST',
            url: 'http://localhost:4000/users',
            data: bodyFormData,
            headers: { Pragma: 'no-cache'},
            config: { headers: {    Accept: 'application/vnd.cia.v1+json',
            'Content-Type': 'application/vnd.cia.v1+json', }}
            }).then(function (response) {
                alert(response);
                console.log(response);
            }).finally(function () {
                alert('finally')
                console.log('Finally'); 
            })
    }
    render() {
        console.log(this.props);
        return (
            <>
            <h3>User Registration Form</h3> 
            <form onSubmit={this.handleSubmit} className="ui form"> 
                <label>Firstname</label>
                <input onChange={this.handleInputChange} name="fname" required/><br />
                <label>Lastname</label>
                <input onChange={this.handleInputChange} name="lname" required/><br />
                <label>Email</label>
                <input onChange={this.handleInputChange} name="email" required/><br />
                <label>Password</label>
                <input onChange={this.handleInputChange} name="pswd" required type="password"/><br />                                
                <button>Submit</button>
            </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signup:state.signup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFName: (fname) => dispatch(getSignUpFirstName(fname)),
        getLName: (lname) => dispatch(getSignUpLastName(lname)),
        getEmail: (email) => dispatch(getSignUpEmail(email)),
        getPswd: (pswd) => dispatch(getSignUpPassword(pswd))  
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupPage);