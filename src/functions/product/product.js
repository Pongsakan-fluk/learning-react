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

export const updateProduct = async(value) => {
    return await axios.put(`https://fakestoreapi.com/products`, value)
}