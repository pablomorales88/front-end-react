import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer'


const middlewares = [logger];

//lo que hace aca es crear un store y le aplica el midleware que actualmente 
//es logger pero podrian haber mas middle ware, por eso pone los tres puntos.
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;