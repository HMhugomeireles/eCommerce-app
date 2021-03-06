import { productAction } from '../actions-types/productActionTypes'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case productAction.PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case productAction.PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case productAction.PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productDetailsReducer = (state = { products: {} }, action) => {
    switch (action.type) {
        case productAction.PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
        case productAction.PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case productAction.PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}