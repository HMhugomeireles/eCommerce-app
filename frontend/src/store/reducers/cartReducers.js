import { cartActionType } from '../actions-types/cartActionType'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case cartActionType.CART_ADD_ITEM:
            
            const {item, qty} = action.payload;
            
            const existItem = state.cartItems.find(productItem => productItem._id === item._id)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.product === existItem.product ? {...i, quantity: i.quantity + qty} : i)
                }
            }

            return {
                ...state,
                cartItems: [...state.cartItems, {...item, quantity: 1 }]
            }
        case cartActionType.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i._id !== action.payload)
            }
        default:
            return state
    }
}