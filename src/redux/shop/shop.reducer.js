import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA

};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        //solo default porque no vamos a tener modificaciones de SHOPDATA
        default:
            return state;
    }
};

export default shopReducer;