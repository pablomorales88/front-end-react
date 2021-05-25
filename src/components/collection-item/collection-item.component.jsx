import React from 'react';

//bindeo con redux
import { connect } from 'react-redux';


import CustomButton from '../custom-button/custom-button.component';

import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

//para la collectionItem no necesitamos guardar ningun state asi que usamos un functional component en vez de un class component

//desetructurando y agregando el redux puedo agregar la accion de que cuando hago click me sume el item 
const CollectionItem = ({ item, addItem}) => {
    const {name, price, imageUrl} = item;
    return(
    <div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted> Add to cart</CustomButton>
    </div>
    )};


//ahora para add nuestro addItem necesitamos agregar el mapDispatch
//y ahora vamos a tener acceso al props addItem y vamos a agregarlo
//como parametro de  ColectionItem
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);