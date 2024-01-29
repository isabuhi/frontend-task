import {Avatar, Button, Input, Navbar, Typography} from '@material-tailwind/react';
import search from '../../../../assets/images/search.svg'
import xIcon from '../../../../assets/images/xIcon.svg'
import classes from './style.module.scss'
import profile from '../../../../assets/images/profile-user.svg'
import {AvatarWithText} from './components/AvatarWithText';
import {useNavigate} from 'react-router-dom';
import AuthService from "../../../../services/auth.service";
import DashboardService from "../../../../services/dashboard.service";
import {useEffect, useState} from "react";

interface Props {
    setMapState: any
    mapState: any
}

export default ({mapState, setMapState}:Props)=>{
    const navigate = useNavigate()
    const [ip, seIp] = useState<string | undefined>("")

    const{data, refetch, isSuccess}= DashboardService().useGetIPLocation(ip)

    useEffect(() => {
        if(isSuccess){
            setMapState(data.data)
        }
    }, [data]);
    return (
        <Navbar
            className="absolute top-0 left-0 right-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-lg backdrop-saturate-200 lg:px-8 lg:py-4">
            <div onClick={()=>{navigate('/profile')}} className={'float-end cursor-pointer'}>
                <AvatarWithText/>
            </div>

            <div className="flex items-center justify-center text-blue-gray-900">
                <div className="relative flex w-full max-w-[24rem]">
                    <Input
                        value={ip}
                        variant={'standard'}
                        type="text"
                        className={`pr-20 border ${classes.input}`}
                        labelProps={{
                            className: "hidden",
                        }}
                        containerProps={{
                            classname: 'p-1'
                        }}
                        onChange={(e)=> seIp(e.target.value)}
                    />
                    <Button
                        size="sm"
                        className={"!absolute right-1 top-1 rounded " + classes.button}
                        onClick={()=>{
                            if(mapState) {
                                setMapState(null)
                                seIp('')
                            }
                            else {
                                if(ip)
                                    refetch()
                            }

                        }
                    }
                    >
                        {mapState? <img src={xIcon}/> : <img src={search}/>}
                    </Button>
                </div>
            </div>
        </Navbar>

    )
}