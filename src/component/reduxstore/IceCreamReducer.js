import {BUY_ICECREAM} from "./ActionTypes";

const initialIceCreamState = {
    numberOfIceCreams: 50
}

const IceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        default:
            return state;
    }
}

export default IceCreamReducer;