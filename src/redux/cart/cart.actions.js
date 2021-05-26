import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//Una action siempre tiene un type y a lo sumo tiene payload
//Ahora que tenemos esto, tenemos que usarlo en el componente. en Collection-item, importandolo para poder bindearlo
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

//Como tengo que borrar un item... lo primero que hice fue
//escribir un nuevo Types... llamado CLEAR_ITEM_FROM_CARA 
//y aca escribir la funcion que borra el item... y un reducer es algo que puede
//reducir o actualizar la lista de items.
//vamos a nuestro cartReducer y pondremos un new case
export const clearItemFromCart = item =>({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})