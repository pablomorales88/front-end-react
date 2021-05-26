import React from 'react';

import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem }) => {
    const {name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
            <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
        </div>
    );
}


//hacemos el dispatchToProps que toma el dispatch del redux store y 
//retorna un nuevo clearItem y con este clearItemFunction vamos a setear como 
//lo hicimos con addItem, la unica diferencia es que ahora estamos usando nuestro nuevo clearItem
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);