import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

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
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CartIcon);

/*

I made one mistake in explaining our CartIcon component and the itemCount! 
Due to itemCount being a primitive (integer), redux will do a shallow equality check under the hood between state changes in mapStateToProps. 
In this case having a selector does not save us on any re-renders of the CartIcon component. If our overall state changes but the itemCount 
value stays the same between these changes,  redux's shallow equality check will see that itemCount is the same value as last time and save 
us a re-render. It's still valuable to keep the logic for the reduce in a selector though because we do still want to memoize the calculation
 of itemCount (our reduce logic), and without a selector our reduce logic would still be running on every state change regardless of the final 
 calculated value of itemCount.


The take away here is that redux's mapStateToProps has a shallow equality check for every value in the object; it won't replace values if they
 pass a shallow equality check which means it won't needlessly re-render, but if we have transformation logic it's still valuable to memoize 
 it with a selector to save us running duplicate logic to get the same output.

*/