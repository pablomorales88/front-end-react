import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import './index.css';
import App from './App';
//import * as serviceWorkerRegistration from './serviceWorkerRegistration';
//import reportWebVitals from './reportWebVitals';

//store vendrian a ser todo el conjunto de variable, el json
//que le vamos a pasar a provider.... para que toda la app pueda 
//leer y cambiar el estado de las cosas
import {store, persistor } from './redux/store';



//BrowserRouter es un componente que trabaja como un 
//wrapper rodeando a nuestra aplicacion  y lo que nos hace
// es que nos da todas las funcionalidades del routing app en nuestra applicacion 
//es la forma de darle acceso a redux a nuestra applicacion
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
     
    document.getElementById('root')
    );

//ReactDOM.render(
//<React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);
//
// If you want your app tod work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.unregister();

