import { useMutation, useQuery } from 'react-query'
import  HTTP  from './index'


export default () => {
    const getIPLocation = async (ip: any) => {
        const res = await HTTP.client().get('/v1/ip-trackers', {params: {ip}})
        return res.data
    }

    const useGetIPLocation = (ip: string | null)=>useQuery({
        queryKey: ['LocationData'],
        queryFn: ()=>getIPLocation(ip),
        enabled: false
    })



    return {
        useGetIPLocation,
    }
}