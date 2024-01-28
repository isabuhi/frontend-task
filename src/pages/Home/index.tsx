import React, {useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import Pointer  from '../../assets/images/Subtract.svg'
import DashboardServive from '../../services/dashboard.servive';
import {Button, Input} from '@material-tailwind/react';
import Navbar from './components/Navbar';

const defaultProps = {
    center: {
        lat: 40.459881,
        lng: 49.916491
    },
    zoom: 11,
};

export default ()=>{
    const [mapState, setMapState] = useState(defaultProps)
    const [ip, setIp] = useState<string | null>(null)
    const {data, isSuccess, refetch} = DashboardServive().useGetIPLocation(ip)


    useEffect(()=>{
        if(isSuccess){
            setMapState({...mapState, center: {lat: data.lat, lng: data.lng}})
        }
    },[data])


    return (
        <>
            <Navbar/>

            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCDoX3NstO1ty91AbiWleydFSXkxP3F3MA" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <div>
                    <img width='30px' src={Pointer}/>
                </div>
            </GoogleMapReact>
        </>
    )
}