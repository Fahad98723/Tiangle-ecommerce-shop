
import { combineReducers, createStore } from "redux";
import productReducer from "./reducers/productsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    products : productReducer,
})

const store = createStore(rootReducer,composeWithDevTools())
export default store