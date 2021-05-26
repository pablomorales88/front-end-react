import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector'

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

//aca tengo que cambiar el cartItems por un selector.... 
//voy a cambiar este codigo por...
/*const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})*/

//este otro..
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDown);