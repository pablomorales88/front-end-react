//aqui pondremos los selector que se usaran en varias partes del codigo y se encuentran dentro de mapToProps
//now, what we want to import from reselect is this function called create selecter

import { createSelector } from 'reselect';

//vamos a escribir dos tipos de selector, unos es..
//input selector: que no usa create selector 
//output selector: que usa input selector  and create selector para contruirse a ellos mismos

//empezamos con un imput selector...Un input selector es una funcion que toma  la estructura siguiente "'select'Cart"
const selectCart = state => state.cart;



// esto crea un selector qe toma como entrada el array de cart y retorna los item de ella, por eso
//la funcion toda dos parametros, selectCart y cart=>cart.cartItems
export const selectCartItems = createSelector(
    [selectCart], cart => cart.cartItems 
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
            0
        )
);