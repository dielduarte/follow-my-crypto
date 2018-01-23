import { FETCHING_CRYPTO_DATA, FETCHING_CRYPTO_DATA_SUCCESS, FETCHING_CRYPTO_DATA_ERROR } from "../actions/crypto-action";

const initialState = {
    isFetching: false,
    data: [],
    hasError: null,
    errorMessage: null,
    refreshing: false
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCHING_CRYPTO_DATA: 
            return { ...state, ...{ isFetching: true, data: [], hasError: false, errorMessage: null } };
        
        case FETCHING_CRYPTO_DATA_SUCCESS: 
            return { ...state, ...{ isFetching: false, data: action.payload, hasError: false, errorMessage: null } }

        case FETCHING_CRYPTO_DATA_ERROR: 
            return { ...state, ...{ isFetching: false, data: action.payload, hasError: true, errorMessage: action.err } }

        default:
            return state;
    }
}