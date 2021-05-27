import React from 'react';
//este connect es para que podamos usar el reducer de las imagenes que creamos en la 
//carpeta directory de redux, y dado que hicimos esto, 
//no vamos a necesitar mas el constructor
import { connect } from 'react-redux'
import MenuItem from '../menu-item/menu-item.component';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections} from '../../redux/directory/directory.selector';
//hay que asegurarse de poner el directory styles
import './directory.styles.scss'

//aca vamos a hacer un componente de clase porque tenemos que mantener el estado
//No como el componente menu-item que muestra title y shopnow
// Aca necesitamos mantener el estado de los menu-items

//Antes habia un componente de clases pero como usamos redux, vamos a usar solo
//un componente de funcion porque no necesitamos acceder al this.state y nos aseguramos de 
//pasar com oparametro sections del reducer y borramos el this.state
const Directory = ({sections}) => (
    
    //dentro de render tenemos que renderizar lo de homepage
    //ya no usamos mas el render ni el return porque no es una clase
    //render(){
      //hacemos un map a traves de las secciones 'sections'
      //Map es una funcion que toma una entrada y la mape con otra cosa.. y usamos una funcion flecha que le va a pasar los titulos 
      //a cada menuitem   
      // se puede desestructurar directamente dentro del map

      //los tres puntos en ...otherSectionProps es una forma de guardar todas las variables que estan en sections en una sola y despues pasarselas
      //todas juntas a menuItem
    //  return( 
  <div className='directory-menu'>              
    {sections.map(({id, ...otherSectionProps}) =>(
      <MenuItem key={id} {...otherSectionProps}/>  
    ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory)