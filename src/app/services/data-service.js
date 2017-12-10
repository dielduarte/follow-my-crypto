import axios from 'axios';


const _dataService = axios.create({
    baseURL: 'https://api.coinmarketcap.com/v1/ticker/?convert=BRL',
    timeout: 1000
});

export default class DataService {
    static GET(url, success, error){
        return _dataService.get(url);
    }
}