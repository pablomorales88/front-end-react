import React from 'react';
import { connect } from 'react-redux';


//import el action del redux del toggle para esconder y mostrar la ventanita de la carta
import { toggleCartHidden } from '../../redux/cart/cart.actions';
//con esta linea voy a traer el selector que tiene el reduce de cart.selector
import { selectCartItemsCount } from '../../redux/cart/cart.selector'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

//functional component
//le voy a pasar el redux toggleCartHidden
const CartIcon = ({ toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

//reduce it's a native array method in JavaScript
//suma la cantidad de items de cada items.

//Cuando se agrega el selector tenemos que remplazar el codigo que hace la suma que lo llevamos al selector
//por el objeto exportado y los parametros de entrada por el state, ya no mas porque {cart:{cartItems}} se reaza simplemente por state
//lo que sucede es que estamos nuestro whole reducer state into del selector.. y de ahi hace toda la reversa en el selector.
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CartIcon);