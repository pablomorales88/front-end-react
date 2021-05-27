//este archivo es el root, que va a mexclar todos los redux en uno solo
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
//tambien podria usar el session storage pero por ahora voy a usar el storage tradicional
//de pe a pa, el que te guarda hasta los calzones de la abuela (porqué haria eso?)
import storage from 'redux-persist/lib/storage';

//aca van a estar todas las acciones que tengan que ver con acciones que cambiarn
//el estado del usuario
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

//archivo de configuracion de la persistencia de redux
//key: is essentially meaning at what point inside of our reduce
// objet we want to start storing everything and we want to start from the root. 
//storage: objeto de la librearia de redux
//whitelist: array que contiene string names de todos los reduce que queremos storageee
//tenemos user y cart pero como user lo maneja firebase, no es necesario que lo storagiemos
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']


}
// vamos a sacar el defaulCombine reduce y lo vamos a poner 
//como a continuacion
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);

//lo que vamos a exportar un objeto donde el key sera el userReduce que queremos,
//key represent slices of state
/*export default combineReducers({
    user: userReducer,
    cart: cartReducer
})*/