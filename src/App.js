import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';

import {auth} from './firebase/firebase.utils';
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
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
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
