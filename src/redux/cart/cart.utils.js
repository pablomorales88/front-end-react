//utility functions allow us to keep our files clean and organize functions that we may need in mutipl files in one location


//la funcion toma el cartItems que existe right now (primer parametro) y el segundo item es el cartItem que quiero agregar
//vamos a mirar adentro de cartItem para ver si el item que queremos agregar ya existe.
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
            )
    }
    //es evidente que si el item existe, no va a llegar aca, entra al otro if y retorna +1
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };