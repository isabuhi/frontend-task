import { useMutation, useQuery } from 'react-query'
import  HTTP  from './index'


export default () => {
    const login = async ({ emailOrUsername, password }: { emailOrUsername: string | null; password: string | null }) => {
        const res = await HTTP.client().post('/v1/users/login', { emailOrUsername, password })
        return res.data
    }

    const signup = async (body: any) => {
        const res = await HTTP.client().post('/v1/users/register', body)
        return res.data
    }

    const logout = () => {
        return HTTP.client().post('v1/users/logout')
    }

    const useLogin = ()=>useMutation({
        mutationFn: login,
    })

    const useSignup = ()=>useMutation({
        mutationFn: signup,
    })

    const useLogout = ()=>useMutation({
        mutationFn: logout,
    })


    return {
        useLogin,
        useSignup,
        useLogout
    }
}