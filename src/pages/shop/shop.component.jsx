import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../../components/collection-preview/collection-preview.component';


//necesitamos conectar este componente con redux
import { selectCollections } from '../../redux/shop/shop.selector';


const ShopPage = ({ collections }) => (
//el map esta retornando una collection donde su Key es el ID principal y no los de cada item
   <div className='shop-page'>
            {
                collections.map(({id,...otherCollectionProps}) =>(
                  <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
             
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);