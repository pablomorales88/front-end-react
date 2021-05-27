import {createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer'


const middlewares = [logger];

//lo que hace aca es crear un store y le aplica el midleware que actualmente 
//es logger pero podrian haber mas middle ware, por eso pone los tres puntos.

//para configurar persistencia tengo que exportarlo (persistenecia cuando se cierra el navegador o la pestaña o apagamos la pc)
//pero tecnicamente no se necesitan (los export) (el que si es obligatorio es el del default)
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

//esto no va porque estoy exportando los dos antes, si lo dejaba me bardeaba con warnings
//export default { store, persistor  };