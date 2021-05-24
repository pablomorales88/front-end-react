import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
//import { render } from '@testing-library/react';
//import { canConstructResponseFromBodyStream } from 'workbox-core/_private';


//como necesitamos usar firebase y necestamos pasar ciertos props del firebase
//vamos a cambiar el 'function App()' por una clase
class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      currentUser : null 
    }
  }

  unsuscribeFromAuth = null;
  //montamos el componente de firebase, y siempre que pase algo en firebase, 
  //se nos avisara... Como esto esta siempre abierto, si el usuario se desauthentica
  //hay que desmontarlo (eso tengo entendido)
  componentDidMount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //si estamos authenticado vamos a crear un userProfileDocument, 
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        //y chequeamos que la data este updateada
        //un snapshot tiene la data en el method data
        //si solo imprimimos el snapshot nos muestra si existe nomas y el Id
        userRef.onSnapshot(snapShot => {
          this.setState({
              currentUser:{
                id: snapShot.id,
                ...snapShot.data()
              }
            }/*
              esto era para imprimir el retorno de la funcion que es asincrono
              ,() => {
              console.log(this.state);
            }*/
          );
          console.log(this.state);

        });
      }
      this.setState({currentUser: userAuth});
      //this.setState({currentUser: user});
      //createUserProfileDocument(user);
      //console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
