import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';

import { getUser,getPswd } from '../actions';

class LoginPage extends Component {
    state= {
        isAuthenticated:false
    }
    handleUserInput = (e) => {
        if (e.target.name === 'email') {
            return (this.props.loginUser(e.target.value));
        } else if (e.target.name === 'password') {
            return (this.props.loginPswd(e.target.value));
        }
    }

    handleAuthenticatedUser = () => {
        console.log('Authenticated user',this.state.isAuthenticated);
        if (this.state.isAuthenticated) {
            console.log('came')
            return <Redirect to="/home" />
        }
    }

    sigupPageRedirect() {
        console.log('signup page')
        return <Redirect to="/signup" />
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email,pswd} = this.props.login;
        if(1) {
            axios.get(`http://localhost:4000/users?user=${email}`).then((res)=> {
                res.data.map((id)=>{
                    console.log(id.password,pswd)
                    if (id.password === pswd) {
                        this.setState({isAuthenticated:true})
                    }
                    return 1
                })
            })
        } else {
            alert("please fill in the credentials")        }
    }
    render() {
        return (
            <>
            {this.handleAuthenticatedUser()}
            <form className="ui large form" onSubmit={this.handleSubmit}>
                <label>Email</label>
                <input required type="text" onChange={this.handleUserInput} name="email" placeholder="Enter Email" /> <br />
                <label>Password</label>
                <input required type='password' onChange={this.handleUserInput} name="password" placeholder="Enter Password" />
                <button>Submit</button><br /><br />
                <div ><u><Link to="/signup">Dont Have an account ? Sign UP</Link></u></div>
            </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login:state.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser : (payload) => dispatch(getUser(payload)),
        loginPswd : (payload) => dispatch(getPswd(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);