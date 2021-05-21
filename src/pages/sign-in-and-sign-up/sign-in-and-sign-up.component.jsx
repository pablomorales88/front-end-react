import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component'

import './sign-in-and-sign-up.styles.scss'


//estoy usando un functional component que es basicamente una const que tiene una funcion flecha
const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
    </div>
)


export default SignInAndSignUpPage;