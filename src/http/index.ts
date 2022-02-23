import axios, { AxiosRequestConfig } from 'axios'
import { config } from 'process'
import { AuthResponse } from '../models/response/AuthResponse'

export const API_URL = 'http://localhost:5000/api'
// export const API_URL = 'https://api.smmhelper.ru/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config: any)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})


$api.interceptors.response.use((config) =>{
    return config
}, async(error) =>{
    const originalRequest = error.config
    if(error.response.status == 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
        try{
            const refreshToken = localStorage.getItem('refreshToken')
            const response: any = await axios.post(`${API_URL}/refresh`, {
                refreshToken
            })
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken);
            return $api.request(originalRequest)
        }catch(e){
            console.log(e)
        } 
    }
    throw error
})

export default $api