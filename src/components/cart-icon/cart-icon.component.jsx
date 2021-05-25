import React from 'react';
import { connect } from 'react-redux';


//import el action del redux del toggle para esconder y mostrar la ventanita de la carta
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

//functional component
//le voy a pasar el redux toggleCartHidden
const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(
    null, 
    mapDispatchToProps
    )(CartIcon);