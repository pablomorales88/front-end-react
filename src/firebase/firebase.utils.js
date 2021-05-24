import firebase from 'firebase/app';

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDERSdDD-aKzhoq_PqGGyyUGvNRIzYmktc",
    authDomain: "crwn-db-3409f.firebaseapp.com",
    projectId: "crwn-db-3409f",
    storageBucket: "crwn-db-3409f.appspot.com",
    messagingSenderId: "1024720421368",
    appId: "1:1024720421368:web:a2822cb9e576df4fe8960d",
    measurementId: "G-6066PL468Y"
  };

//exportaremos la data a la base de datos solo si tenemos un usuario nuevo
//no si no estamos logeados. Chequeremos que nos llegue un objeto con valido

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    // si existe, meteremos los datos dentro de la DB
    console.log(snapShot);

    //si no existe el usuario "snapShot exist" vamos a crearlo
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
} 

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

//ahora hago el setup para Google authentication utility
//ahora provider tendra acceso a la clase de GoogleAuth
const provider = new firebase.auth.GoogleAuthProvider();

//tomare un par de parametros, usando el customParameters method
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;