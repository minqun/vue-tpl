import axios from './index'
const host = '//192.168.0.103:3000/';

export const toGet = (url, params, extra = {}) => {
    let dataString = '';
    if (params) {
        for (let [key, value] of Object.entries(params)) {
            dataString += `&${key}=${value}`
        }
        dataString = '?' + dataString.substring(1)
    }

    return axios.get(`${host}${url}${dataString}`, extra)
}
export const toDetele = (url, params, extra = {}) => {
    let dataString = '';
    if (params) {
        for (let [key, value] of Object.entries(params)) {
            dataString += `&${key}=${value}`
        }
        dataString = '?' + dataString.substring(1)
    }

    return axios.get(`${host}${url}${dataString}`, extra)
}
export const toPost = (url, params, extra = {}) => {
    return axios.post(`${host}${url}`, params, extra)
}
export const toPut = (url, params, extra = {}) => {
    return axios.put(`${host}${url}`, params, extra)
}