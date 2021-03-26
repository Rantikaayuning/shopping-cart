import { GET_PRODUCT, GET_CARTLIST } from '../types';

const initialState = {
    productsList: [],
    myCart: {}
}

const HomePageReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case GET_PRODUCT:
            return {
                ...state,
                productsList: payload
            }
        case GET_CARTLIST:
            return {
                ...state,
                myCart: payload
            }
        default :
        return state
    }
}

export default HomePageReducer;
