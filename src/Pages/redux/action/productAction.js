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