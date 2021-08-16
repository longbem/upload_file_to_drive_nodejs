import * as axios from 'axios';

const devBaseUrl = 'http://localhost:5000/api';
const prodBaseUrl = '';

const isDev = true;

export const API_URL = axios.create({
    baseURL: isDev ? devBaseUrl : prodBaseUrl,
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Content-Type': 'application/json'
    }
});
