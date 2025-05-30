import axiosConfig from'../axiosConfig';
import axios from 'axios';

export const apiGetPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method : 'GET',
            url : '/api/v1/post/all',
        })
        resolve(response)
    } catch (error) { 
        reject(error)
    }
})

export const apiGetPostsLimit = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method : 'GET',
            url : `/api/v1/post/limit`,
            params: query
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPostsLimit2 = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method : 'GET',
            url : `/api/v1/post/detail`,
            params: query
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetNewPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method : 'GET',
            url : `/api/v1/post/new-post`,
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})  

export const apiUploadImages = (images) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method : 'POST',
            url : `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUND_NAME}/image/upload`,
            data : images
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})


export const apiCreatePost = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method : 'POST',
            url : `/api/v1/post/create-new`,
            data : payload 
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPostsLimitAdmin = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method : 'GET',
            url : `/api/v1/post/limit-admin`,
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiUpdatePost = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method : 'PUT',
            url : `/api/v1/post/update`,
            data : payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiDeletePost = (postId) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method : 'DELETE',
            url : `/api/v1/post/delete`,
            params : {postId}
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
