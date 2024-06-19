import axios from "axios";


export const listProduct = async() => {
    return await axios.get(`https://fakestoreapi.com/products`)
}

export const readProduct = async(id) => {
    return await axios.get(`https://fakestoreapi.com/products/${id}`)
}

export const createProduct = async(value) => {
    return await axios.post(`https://fakestoreapi.com/products`, value)
}

export const updateProduct = async(id, value) => {
    return await axios.put(`https://fakestoreapi.com/products/${id}`, value)
}

export const deleteProduct = async(id) => {
    return axios.delete(`https://fakestoreapi.com/products/${id}`)
}