import axios from 'axios'
import { productAction } from '../actions-types/productActionTypes'


export const listProducts = () => async (dispacth) => {
    try {
        dispacth({ type: productAction.PRODUCT_LIST_REQUEST})

        const { data } = await axios.get('/api/product')

        dispacth({
            type:  productAction.PRODUCT_LIST_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispacth({
            type: productAction.PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })        
    }
}

export const productDetails = (id) => async (dispacth) => {
    try {
        dispacth({ type: productAction.PRODUCT_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/product/${id}`)

        dispacth({
            type:  productAction.PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispacth({
            type: productAction.PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })        
    }
}