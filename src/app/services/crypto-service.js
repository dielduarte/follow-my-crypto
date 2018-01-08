import axios from 'axios';
import { URLBASE } from '../utils/consts';
import { FETCHING_CRYPTO_DATA, FETCHING_CRYPTO_DATA_SUCCESS } from '../state-management/actions/crypto-action';

export default function FetchCoins(){
    return dispatch => {

        dispatch({type: FETCHING_CRYPTO_DATA})

        return axios.get(`${URLBASE}ticker/?convert=BRL`).then(
            res => {
                dispatch({type: FETCHING_CRYPTO_DATA_SUCCESS, payload: res.data})
            }
        ).catch(
            err => {
                dispatch({type: FETCHING_CRYPTO_DATA_ERROR, payload: err.data})
        })
    }
}