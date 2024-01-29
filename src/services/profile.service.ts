import HTTP from "./index";
import {useQuery} from "react-query";

export default ()=>{
    const getProfile = async () => {
        const res = await HTTP.client().get('/v1/users/get-profile')
        return res.data
    }

    const getEducation = async () => {
        const res = await HTTP.client().get('/v1/educations')
        return res.data
    }

    const useGetProfile = ()=>useQuery({
        queryKey: ['Profile'],
        queryFn: ()=>getProfile(),
        enabled: false
    })
    const useGetEducation = ()=>useQuery({
        queryKey: ['Education'],
        queryFn: ()=>getEducation(),
        enabled: false,
    })

    return {
        useGetProfile,
        useGetEducation
    }
}