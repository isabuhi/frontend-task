import {Input, Typography, Button} from '@material-tailwind/react'
import classes from './style.module.scss'
import Colors from '../../../../constants/colors';
import {useState} from 'react';
import AuthService from '../../../../services/auth.service';



const inputList = [
    {
        label: 'Adnız',
        name: 'firstName',
        required: true,
        type: 'text'
    },
    {
        label: 'Soyadınız',
        name: 'lastName',
        required: true,
        type: 'text'
    },
    {
        label: 'İstifadəçi adınız',
        name: 'username',
        required: true,
        type: 'text'
    },
    {
        label: 'E-poçtunuz',
        name: 'email',
        required: true,
        type: 'email'
    },
    {
        label: 'Şifrəniz',
        name: 'password',
        required: true,
        type: 'password'
    },
    {
        label: 'Təkrarlanmış şifrəniz',
        name: 'confirmedPassword',
        required: true,
        type: 'password'
    }
]

export default (props: any)=>{
    const [user, setUser] =
        useState<any>({})

    const {mutate, data} = AuthService().useSignup()
    const handleSubmit = (e: any)=>{
        e.preventDefault();
        let valid = true
        Object.values(user).forEach((value)=>{
            if(value== null){
                valid = false
            }
        })
        if(valid){
            mutate(user)
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={`${classes.wrapper} flex flex-col gap-y-3.5`}>
                <Typography style={{textAlign: 'center'}} variant="h3">Hesab yarat</Typography>
                {
                    inputList.map((input, index) => {
                        return (
                            <Input
                                onChange={(e) => setUser({...user, [input.name]: e.target.value})}
                                type={input.type} label={input.label}
                                required={input.required}
                                key={index}
                            />
                        )
                    })
                }
                <Typography style={{textAlign: 'center'}} variant="paragraph">
                    Hesabınız var? <a className={classes.anchorStyle} onClick={() => {
                    props.setIsLogin(true)
                }}>Daxil ol</a>
                </Typography>
                <Button type={'submit'} style={{background: Colors.darkBlue}}>Qeydiyyat</Button>

            </div>
        </form>
    )
}