import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';


//tenemos que mostrar arriba del div el cartItems que representa el carrito de compras
//ensima de nuestro cart items.. ponemos el cart item
const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);