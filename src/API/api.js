import Axios from 'axios';

export const baseURL = 'http://188.225.36.187/';

export const API = {
    get: ({url, params, ...rest}) =>
        Axios({
            method: 'GET',
            url,
            params,
            baseURL,
            ...rest
        }),
}