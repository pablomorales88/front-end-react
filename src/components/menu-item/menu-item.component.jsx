import React from 'react';

import { withRouter } from 'react-router-dom';


import './menu-item.styles.scss';
//we could use props like a 'const MenuItem = (props) => ( y cuando quiera usar el titulo llamo a props.title)
//pero solo desestructurarmeos title y pasaremos title directarmente, esto asumo que se hace de esta forma 
//ya que este componente no tiene estados y es mas facil respolverlo y pasarle directamente el titulo y no Props. 

//Now using javascript template string... pondremos una imagen dentro
//Esto esta bueno porque nos permite dinamicamente cambiar styles en nuestros componentes
//porque si cambia la imagen, tambien cambia el css.

//La razon por la que cambiamos de lugar el backgroundImagen, que estaba dentro de div className menu-item
//es que no queremos que la imagen sea grande... algo asi

//cuando usamos el wrapper withRouter en la linea `withRouter(Menuitem)`
//estamos transformando el componente en otro pero lo devuelve con acceso al hitorial
//y props, pero le da el mismo nombre. Ahora... puedo usar history


//Aqui tomamos Match(que viene en props tengo entendido, osea del wrapper "withRouter") y el linkUrl
//que lo traigo de directory.component y lo uso a ambos en history.push(/somematchedURL/LinkUrl)
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
        className={`${size} menu-item`} 
        onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);