import React, {useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import Pointer  from '../../assets/images/Subtract.svg'
import Navbar from './components/Navbar';
import LocationDetailsTable from "./components/DetailsTable";
import classes from './style.module.scss'

const defaultProps = {
    center: {
        lat: 40.459881,
        lng: 49.916491
    },
    zoom: 11,
};

export default ()=>{
    const [mapState, setMapState] = useState<any>(null)

    let lat = mapState?.location?.lat
    let lng = mapState?.location?.lng
    if(lat && lng){
        lat = parseFloat(lat)
        lng = parseFloat(lng)
    }

    const labelMap: any = {
        ip: "IP ünvan",

        country: "Ölkə",

        region: "Bölgə",

        city: "Şəhər",

        lat: "Paralel",

        lng: "Meridian",

        timezone: "Zaman qurşağı"
    }
    let parseData
    if(mapState)
     parseData= {ip: mapState.ip, ...mapState.location}

    return (
        <div className={"h-full w-full"}>
            <Navbar setMapState={setMapState} mapState={mapState} />
            {parseData && <div className={`${classes.listContainer} h-2/3`}>
                <LocationDetailsTable listData={parseData} listMap={labelMap}/>
            </div>}
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCDoX3NstO1ty91AbiWleydFSXkxP3F3MA" }}
                defaultZoom={defaultProps.zoom}
                defaultCenter={defaultProps.center}
                center={mapState? {lat, lng} : undefined}
            >
                <img width='30px' src={Pointer}/>
            </GoogleMapReact>
        </div>
    )
}