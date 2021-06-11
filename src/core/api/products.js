import axios from 'axios'
const endPoint = 'http://127.0.0.1:8000/'


export const getAllProducts = () => {
    return axios.get(endPoint)
}

export const updateLikedProducts = (payload) => {
    return axios.post(endPoint, payload)
}

export const getLikedProducts = () => {
    return axios.get(`${endPoint}favs`)
}

export const removeLikedProducts = (payload) => {
    return axios.delete(`${endPoint}favs`, {headers: {}, data : payload })
}