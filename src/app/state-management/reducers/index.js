import { combineReducers } from 'redux';
import cryptoReducer from './crypto-reducer';

export const RootReducer = combineReducers({
    crypto: cryptoReducer
})