import React from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

//esto me imagino que lo pongo porque voy a traer cosas de dos
//selectors
import { createStructuredSelector} from 'reselect'

import {auth} from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser} from '../../redux/user/user.selector';
//this import below it's a special syntax in React for importing SVG.
import {ReactComponent as Logo} from '../../assets/logo.svg';

import './header.styles.scss';

//esto es un componente de funcion porque por lo que veo no matiene estados, solo
//tiene links arriba, es el que te lleva al shop, al home.. en definitiva... el header

//al cartDropDown lo voy a poner fuera del dip de las options. 
const Header = ({currentUser, hidden}) => (
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
            <CartIcon/>

        </div>
        {
            hidden ? null : <CartDropDown />
        }
    </div>
)
//pasa el estado actual, el state es el root reducer, pasaremos el current user
//{user:{currentUser}} es una forma de desectructurar un valor que esta
//dentro de user por ejemplo y pasarelo a user

//cuando usamos varios selector podemos usar createStructuredSelector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);