import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

//vamos a agregar en el cart reducer un init state
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state, 
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                //action.CartActionTypes => tenemos que ir a cart action y escribir la accion
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }   
};


export default cartReducer;
