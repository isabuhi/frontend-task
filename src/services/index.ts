import axios, { AxiosInstance } from 'axios'
import URLs from '../constants/urls'


export default (() => {
    let $client: AxiosInstance
    function refreshToken() {
        $client.get('/v1/users/refresh').then((data)=>{
            localStorage.setItem('Token', data.data)
        }).catch(error=>{
            console.log(error)
            if(error.status === 401){
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

                if (error.response.status === 401 && !error.request.responseURL.includes('/refresh')) {
                    refreshToken()
                }

                return Promise.reject(error.response.data)

            })


            return $client
        },
        client() {
            const token = localStorage.getItem('Token')
            if (token) {
                $client.defaults.headers.common.Authorization = `Bearer ${token}`
            }

            return $client
        },
    }
})()
