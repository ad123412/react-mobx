import {combineReducers, createStore} from "redux";
import cakeReducer from "./CakeReducer";
import iceCreamReducer from './IceCreamReducer'

const rootReducer = combineReducers({
    cake: cakeReducer, iceCream: iceCreamReducer
})

const store = createStore(rootReducer);

export default store;
