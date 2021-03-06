export function productsAddToCart (payload) {
    return {
        type : 'ADD_TO_CART',
        payload
    }
}

export function productPlus (payload){
    return {
        type : 'PRODUCT_PLUS',
        payload
    }
}
export function productMinus (payload){
    return {
        type : 'PRODUCT_MINUS',
        payload
    }
}
export function productCountZero (payload){
    return {
        type : 'PRODUCT_COUNT_ZERO',
        payload
    }
}
export function setUser (payload){
    return {
        type : 'SET_USER',
        payload
    }
}
export function deleteFromCart (payload){
    return {
        type : 'DELETE_FROM_CART',
        payload
    }
}
export function updateCart (payload){
    return {
        type : 'UPDATE_CART',
        payload
    }
}
export function cartRemove (payload){
    return {
        type : 'CART_REMOVE',
        payload
    }
}
export function admin (payload){
    return {
        type : 'ADMIN',
        payload
    }
}
