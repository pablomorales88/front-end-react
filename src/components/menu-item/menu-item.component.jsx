import React from 'react';

import './menu-item.styless.scss'
//we could use props like a 'const MenuItem = (props) => ( y cuando quiera usar el titulo llamo a props.title)
//pero solo desestructurarmeos title y pasaremos title directarmente, esto asumo que se hace de esta forma 
//ya que este componente no tiene estados y es mas facil respolverlo y pasarle directamente el titulo y no Props. 
const MenuItem = ({ title }) => (
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;