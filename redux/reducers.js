import { ADD_FAVORITE, ADD_TO_CART, RECEIVE_API_DATA, REMOVE_FROM_CART } from "./constants"

const initialState = {
    cartItems: [],
    addedItems: [],
    totalprice: 0,
    favorite: []
}


export const cartItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_API_DATA:
            return {
                ...state,
                cartItems: action.payload
            }
        case ADD_TO_CART:
            const products = state.addedItems
            let itemIndex = products.findIndex((item) => item.id === action.payload.id)
            if (itemIndex === -1) {
                products.push(action.payload)
            } else {
                products[itemIndex].quantity += 1
            }
            let rr = { ...state, addedItems: products, totalprice: state.totalprice + action.payload.price }
            return rr
        case REMOVE_FROM_CART:
            return {
                ...state,
                addedItems: state.addedItems.filter((item) => item.id !== action.payload.id),
                totalprice: state.totalprice - action.payload.price
            }
        case ADD_FAVORITE:
            const _products = state.favorite
            let _itemIndex = _products.findIndex((item) => item.id === action.payload.id)
            if (_itemIndex === -1) {
                _products.push(action.payload)
            } else {
                _products[_itemIndex].quantity += 1
            }
            let fvrt = { ...state, favorite: _products }
            return fvrt
        default:
            return state
    }
}