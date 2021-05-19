import React, { Component } from 'react'
import './Signin.css'
import FormInput from './form-input'

import CustomButton from './custom-button'
import { auth ,signInWithGoogle} from '../firebase/firebase.utilities'

export default class Signin extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email: '', password: ''});
          
            }
            catch(error){
                console.log(error);
                alert(error);
        };
        
    
        
        };
    
    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
        };

    render() {
        return (
            <div className="sign-in">
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" name="email" value= {this.state.email} handleChange={this.handleChange} label='email' required />
                <FormInput type="password" name="password" value= {this.state.password} handleChange={ this.handleChange} label= 'password' required />
                <CustomButton className="buttons" type='submit'> Sign in </CustomButton>
                <CustomButton className="google-sign-in" onClick={signInWithGoogle}> 
                Sign in with Google
                </CustomButton>
                
            </form>
                
            </div>
        )
    }
}




