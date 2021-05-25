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
