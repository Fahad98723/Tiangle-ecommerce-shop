const initialState = {
    count : 0,
    cart : [],
    user : {}
}

function productReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TO_CART' : {
            const newState = {...state, cart : [...state.cart, action.payload]}
            return newState
        }
        case 'PRODUCT_PLUS' : {
            const newState = {...state, count : state.count + action.payload}
            return newState
        }
        case 'PRODUCT_MINUS' : {
            const newState = {...state, count : state.count - action.payload}
            if(newState.count < 0){
                return
            }
            return newState
        }
        case 'PRODUCT_COUNT_ZERO' : {
            const newState = {...state, count : action.payload}           
            return newState
        }
        case 'SET_USER' : {
            const newState = {...state, user : action.payload}           
            return newState
        }
        case 'DELETE_FROM_CART' : {
            const newState = {...state, cart : [...state.cart.filter(c => c._id !== action.payload)]}           
            return newState
        }
        default :
            return state
    }
}

export default productReducer