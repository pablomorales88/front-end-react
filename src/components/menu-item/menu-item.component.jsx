import React from 'react';

import './menu-item.styles.scss';
//we could use props like a 'const MenuItem = (props) => ( y cuando quiera usar el titulo llamo a props.title)
//pero solo desestructurarmeos title y pasaremos title directarmente, esto asumo que se hace de esta forma 
//ya que este componente no tiene estados y es mas facil respolverlo y pasarle directamente el titulo y no Props. 

//Now using javascript template string... pondremos una imagen dentro
//Esto esta bueno porque nos permite dinamicamente cambiar styles en nuestros componentes
//porque si cambia la imagen, tambien cambia el css.
const MenuItem = ({ title, imageUrl, size }) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
        
        }}
        className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;