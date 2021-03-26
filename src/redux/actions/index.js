import { GET_CARTLIST, GET_PRODUCT } from '../types/index';
import { commerce } from '../../lib/commerce';

export const getProducts = () => async (dispatch) => {
    const { data } = await commerce.products.list()
    return dispatch({
        type: GET_PRODUCT,
        payload: data
    })
}

export const getCartList = () => async (dispatch) => {
    const data = await commerce.cart.retrieve();
    return dispatch({
        type: GET_CARTLIST,
        payload: data
    })
}

export const getUpdateCartQty = (id, quantity) => async (dispatch) => {
    const response = await commerce.cart.update(id, { quantity })
    return dispatch({
        type: GET_CARTLIST,
        payload: response.cart
    })
}
export const getRemoveFromCart = (lineItemId) => async (dispatch) => {
    const { cart } = await commerce.cart.remove(lineItemId);
    return dispatch({
        type: GET_CARTLIST,
        payload: cart
    })
}

export const handleAddToCart = (productId, quantity) => async (dispatch) => {
    const item = await commerce.cart.add(productId, quantity);
    return dispatch({
        type: GET_CARTLIST,
        payload: item.cart
    });
};