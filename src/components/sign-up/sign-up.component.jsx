import React from 'react';



import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email: '',
            password:'',
            confirmPassword:''
        }
    }
    //handle submit es cuando se apreta el boton 
    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            //aca lo que hace es poner el setState en vacio porque la peticion ya fue procesada
            //y en el front tiene que aperecer vacio
            this.setState({
                displayName:'',
                email: '',
                password:'',
                confirmPassword:''
            })
        }
        catch(error){
            console.error(error);
        }
    }
    //habdle change es cuando cambia algo del input
    handleChange = event =>{
        const {name, value}  = event.target;
        
        this.setState({[name]:value});
    }
    render(){
        //esta linea me permite que el return tenga acceso a las variable del state
        const{ displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
            <h2 className='title'> I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required>

                </FormInput>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='email'
                    required>

                </FormInput>
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required>

                </FormInput>
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm password'
                    required>

                </FormInput>
                <CustomButton type='submit'>
                    SIGN UP
                </CustomButton>
            </form>
        </div>
        )
        
    }

}


export default SignUp;