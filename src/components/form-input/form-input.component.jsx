import React from 'react';

import './form-input.styles.scss'
//creamos un form input que es un functional component porque no necesitamos
//mantener ningun estado.
//tomaremos el handleChange prop, label y el resto de los props de forma desestructura
//porque lo vamos a usar dentro de nuestro input
//la razon por la que usamos handleChange es porque queremos enviar (bluble up) hacia arriba cualquier
//cambio que haya habido en el input

//Explicacion de la linea "label ? " Se usa, porque no se si me va a venir algo en label
//o no, si no me viene nada en label, debo general un label, sino no 
const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {label ? (
            <label 
                className={`${
                    otherProps.value.length ? 'shrink' : '' 
                    } form-input-label`}
            >
                {label} 
                
            </label>
        ) : null }
    </div>
)


export default FormInput;