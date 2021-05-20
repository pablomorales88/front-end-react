import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
//import * as serviceWorkerRegistration from './serviceWorkerRegistration';
//import reportWebVitals from './reportWebVitals';


//BrowserRouter es un componente que trabaja como un 
//wrapper rodeando a nuestra aplicacion  y lo que nos hace
// es que nos da todas las funcionalidades del routing app en nuestra applicacion 
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
     
    document.getElementById('root'));

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

