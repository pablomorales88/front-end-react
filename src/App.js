import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';
import {connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions';

import { selectCurrentUser} from './redux/user/user.selector';
//import { render } from '@testing-library/react';
//import { canConstructResponseFromBodyStream } from 'workbox-core/_private';


//como necesitamos usar firebase y necestamos pasar ciertos props del firebase
//vamos a cambiar el 'function App()' por una clase
class App extends React.Component {
  
  /*
  //como uso redux, ya no necesito mas el contructor, porque el estado del current state
  //me lo mantiene redux
  constructor(){
    super();
    this.state = {
      currentUser : null 
    }
  }
  */

  unsuscribeFromAuth = null;
  //montamos el componente de firebase, y siempre que pase algo en firebase, 
  //se nos avisara... Como esto esta siempre abierto, si el usuario se desauthentica
  //hay que desmontarlo (eso tengo entendido)
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //si estamos authenticado vamos a crear un userProfileDocument, 
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        //y chequeamos que la data este updateada
        //un snapshot tiene la data en el method data
        //si solo imprimimos el snapshot nos muestra si existe nomas y el Id
        userRef.onSnapshot(snapShot => {
          //vamos a reemplazar el setState code con nuestro SetCurren user action code agregando "props"
          //y ahora si desestructuramos y hacemos setCurrentUser= this.props como en la linea 39, podemos 
          //quitar el this props y poner directamente setCurrentUser
          setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              }
            //} este corchete lo comento porque iba cuando no usaba redux, 
            //ya que usaba this.setcurrentUser directamente sin el .props
            /*
              esto era para imprimir el retorno de la funcion que es asincrono
              ,() => {
              console.log(this.state);
            }*/
          );
          //con este console log veo cuando esta autorizado el sign-in
          //console.log(this.state);

        });
      }
      setCurrentUser(userAuth);
      //this.setState({currentUser: user});
      //createUserProfileDocument(user);
      //console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }
  //en route voy a usar render en vez de component (en el signing) que es una invocacion a javascript que determina que componente debe
  //retornarse en ese lugar.
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' render={CheckoutPage}/>
          <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} />
        </Switch>
        
      </div>
    );
  }
}

//esto lo hago porque necesito saber si el usuario esta conectado o no
//para redireccionarlo desde el signin.
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  //inside de nuestro map dispach 
  //cuando usamos esto ya no vamos a necesitar el constructor
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
//como no necesitamos ningun props , ponemos null como primer argumento, porque no necesitamos mantener ningun state de props.
//ahora en vez del null que estaba antes como primer parametro, vamos a poner el mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
