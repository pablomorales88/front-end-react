import React from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils'


//this import below it's a special syntax in React for importing SVG.
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

//esto es un componente de funcion porque por lo que veo no matiene estados, solo
//tiene links arriba, es el que te lleva al shop, al home.. en definitiva... el header
const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to ='/signin'>
                    SIGN IN
                </Link>
            }

        </div>
    </div>
)

export default Header;