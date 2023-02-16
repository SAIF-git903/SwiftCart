import { REQUEST_API_DATA, RECEIVE_API_DATA, ADD_TO_CART, REMOVE_FROM_CART, ADD_FAVORITE } from "./constants"


export const requestApiData = () => ({
    type: REQUEST_API_DATA
})


export const receiveApiData = (data) => ({
    type: RECEIVE_API_DATA,
    payload: data
})


export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item
})

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId
})

export const addFavorite = (itemId) => ({
    type: ADD_FAVORITE,
    payload: itemId
})