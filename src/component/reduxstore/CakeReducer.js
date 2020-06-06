import {BUY_CAKE} from "./ActionTypes";

const initialCakeState = {
    numberOfCakes: 10
}

const CakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state;
    }
}

export default CakeReducer;