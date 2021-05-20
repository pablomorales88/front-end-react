import React from 'react';

import SHOP_DATA from'./shop.data.js'

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections:SHOP_DATA
        };
    }
//el map esta retornando una collection donde su Key es el ID principal y no los de cada item
    render(){
        const {collections} = this.state;
        return (<div className='shop-page'>
            {
                collections.map(({id,...otherCollectionProps}) =>(
                  <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
             
        </div>);
    }
}

export default ShopPage;