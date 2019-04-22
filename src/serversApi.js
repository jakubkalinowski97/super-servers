import axios from 'axios';

const API_URL = 'http://localhost:4454/servers/';

export const fetchServersApi = () => {
    return axios.get(API_URL);
}

export const fetchServerApi = (id) => {
    return axios.get(API_URL + id);
}

export const turnOnServerApi = (id) => {
    return axios.put(API_URL + id + '/on');
}

export const turnOffServerApi = (id) => {
    return axios.put(API_URL + id + '/off');
}

export const rebootServerApi = (id) => {
    return axios.put(API_URL + id + '/reboot');
}