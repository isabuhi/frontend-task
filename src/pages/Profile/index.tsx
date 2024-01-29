import CustomTabs from "./components/CustomTabs";
import {Button, Typography} from '@material-tailwind/react';
import {AvatarWithText} from '../Home/components/Navbar/components/AvatarWithText';
import Colors from '../../constants/colors';
import {useNavigate} from 'react-router-dom';


export default ()=>{
    const navigate = useNavigate()
    return(
        <div className={"h-full w-full p-5 flex flex-col"} style={{background: "rgba(235,235,248,0.73)"}}>
            <div className={"flex flex-row justify-between items-center pb-3"}>
                <Button
                    className={"border-12"} style={{background: Colors.lightGrey, color: "black"}}
                    onClick={()=>{
                        navigate("/")
                    }}
                >
                    Axtarış
                </Button>
                <Typography variant={"h5"}>
                    Şəxsi profilim
                </Typography>
                <AvatarWithText/>
            </div>
            <div><CustomTabs/></div>
        </div>
    )
}