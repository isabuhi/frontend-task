import axios, { AxiosInstance } from 'axios'
import URLs from '../constants/urls'
import {Navigate} from 'react-router-dom';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;

export default (() => {
    let $client: AxiosInstance
    function refreshToken() {
        $client.get('/v1/users/refresh').then((data)=>{
            console.log(data)
        }).catch(error=>{
            console.log(error)
            if(error.status === 500){
                document.location.pathname = '/login'
                localStorage.removeItem('Token')
            }
        })
    }
    return {
        createClient(url?: string): AxiosInstance {
            if ($client) {
                return $client
            }

            $client = axios.create({
                baseURL: URLs.BASE_URL,
                responseType: 'json',
            })

            $client.interceptors.response.use(function (response) {
                return response
            }, function(error) {
                console.log(error)
                if (error.response.status === 401) {
                    refreshToken()
                }
                return Promise.reject(error.response.data)
            })


            return $client
        },
        client() {
            const token = localStorage.getItem('token')
            if (token) {
                $client.defaults.headers.common.Authorization = `Bearer ${token}`
            }

            return $client
        },
    }
})()
