import React, { Component } from 'react'
import './Sign-in-Sign-up.css';  
import Signin from './Signin';
import Signup from './Signup'

export default class SigninSignup extends Component {
    render() {
        return (
            <div className="sign-in-and-sign-up">
                <Signin />
                <Signup />
            </div>
        )
    }
}
