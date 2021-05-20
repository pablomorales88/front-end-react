import React from 'react';


import MenuItem from '../menu-item/menu-item.component'

//hay que asegurarse de poner el directory styles
import './directory.styles.scss'

//aca vamos a hacer un componente de clase porque tenemos que mantener el estado
//No como el componente menu-item que muestra title y shopnow
// Aca necesitamos mantener el estado de los menu-items

class Directory extends React.Component{
    constructor(){
        super();


        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }
    //dentro de render tenemos que renderizar lo de homepage
    render(){
    //hacemos un map a traves de las secciones 'sections'
    //Map es una funcion que toma una entrada y la mape con otra cosa.. y usamos una funcion flecha que le va a pasar los titulos 
    //a cada menuitem   
    // se puede desestructurar directamente dentro del map
    
        <div className='directory-menu'> 
            
            {this.state.sections.map(({title, imageUrl, id}) =>(
                <MenuItem key={id} title={title} />  
            ))}
        </div>

    }
    
}

export default Directory