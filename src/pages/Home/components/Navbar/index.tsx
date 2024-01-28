import {Avatar, Button, Input, Navbar, Typography} from '@material-tailwind/react';
import search from '../../../../assets/images/search.svg'
import classes from './style.module.scss'
import profile from '../../../../assets/images/profile-user.svg'
import {AvatarWithText} from './components/AvatarWithText';
import {useNavigate} from 'react-router-dom';



export default ()=>{
    const navigate = useNavigate()
    return (
        <Navbar
            className="absolute top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-lg backdrop-saturate-200 lg:px-8 lg:py-4">
            <div onClick={()=>{navigate('/profile')}} className={'float-end cursor-pointer'}>
                <AvatarWithText/>
            </div>

            <div className="flex items-center justify-center text-blue-gray-900">
                <div className="relative flex w-full max-w-[24rem]">
                    <Input
                        variant={'standard'}
                        type="text"
                        className={`pr-20 border ${classes.input}`}
                        labelProps={{
                            className: "hidden",
                        }}
                        containerProps={{
                            classname: 'p-1'
                        }}
                    />
                    <Button
                        size="sm"
                        className={"!absolute right-1 top-1 rounded " + classes.button}
                    >
                        <img src={search}/>
                    </Button>
                </div>
            </div>
        </Navbar>

    )
}