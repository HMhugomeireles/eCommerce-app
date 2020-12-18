import axios from 'axios'
import { cartActionType } from '../actions-types/cartActionType'

export const addItemToCard = (id, qty = 1) => async (dispacth, getState) => {
    const { data } = await axios.get(`/api/product/${id}`)
    
    dispacth({ 
        type: cartActionType.CART_ADD_ITEM,
        payload: {
            item: data,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCard = (id) => (dispacth, getState) => {
    dispacth({ 
        type: cartActionType.CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}