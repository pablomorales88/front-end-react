import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';


//CollectionPreview retornara un div que tendra otro div que contiene nuestra collection entera
//Lo que estamos haciendo aca, es usar los valores title y items que vendran de lo que sale de shop.data.js 
//y hacerle un map a cada item y mostrando el name por ahora.
//El key que va a usar va a ser el id que esta dentro de cada item.


//destacar que la linea 19 todavia no termino de entender como hace para filtrar. Leer FILTER..

//cuando importamos podemos cambiar el div que esta en el map y poner directamente <CollectionItem...>
// Ahora bien, cuando cambio por collectioItem y saco los div, ahora hago el map con id desestructurando y todo lo otro
//que esta en items... que no sea id lo mete en otherItemProps y lo paso a collectioItem
const CollectionPreview = ({title,items}) =>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item,idx)=>idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
    </div>    
);

export default CollectionPreview