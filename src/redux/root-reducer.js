//este archivo es el root, que va a mexclar todos los redux en uno solo
import { combineReducers } from 'redux';

//aca van a estar todas las acciones que tengan que ver con acciones que cambiarn
//el estado del usuario
import userReducer from './user/user.reducer';

//lo que vamos a exportar un objeto donde el key sera el userReduce que queremos,
//key represent slices of state
export default combineReducers({
    user: userReducer
})