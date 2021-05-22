import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
//este class component tiene un default event driver para no permitir
//que el submit del form no actualice la web
//y a su vez tiene dos handles, en el submit tenemos el event.preventDefault y 
//defaulteamos los valores de email y password.
//en el handleChange que se activa con el onChange se desestructuran los valores
//del event.target y se van poniend en el state. 
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        };
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password: ''})
    }
    //event target son los elementos del input en si mismo.
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I have already an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label="email"
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="password"
                        required />
                    <div class = 'buttons'>
                        <CustomButton type='submit'>
                        Sign In
                        </CustomButton>

                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {''}
                        Sign In with Google
                        {''}
                        </CustomButton>

                    </div>
                    
                </form>
            </div>
        )
    }
}


export default SignIn;