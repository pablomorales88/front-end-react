
import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

//vamos a agregar en el cart reducer un init state
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};
//antes de escribirlo aca, estaba armando en action el clearItemForCart
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
        //ahora solo tenemos que binder cheout-item.component con esto
        //Lo que hace con el filter es quedarse con todos los item con ID que son distintos
        //al que estoy tratando de borrar.
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
               ...state,
               cartItems: state.cartItems.filter( 
                   cartItem => cartItem.id !== action.payload.id
                )
            }
        default:

            return state;
    }   
};


export default cartReducer;
