import {Input, Typography, Button, ThemeProvider} from '@material-tailwind/react'
import classes from './style.module.scss'
import Colors from '../../../../constants/colors';
import {useState} from 'react';
import AuthService from '../../../../services/auth.service';
import {Navigate} from 'react-router-dom';



export default (props: any)=>{
    const [user, setUser] =
        useState<{emailOrUsername: string | null, password: string | null}>({emailOrUsername: null, password: null})

    const {mutate, data} = AuthService().useLogin()


    const handleSubmit = (e: any)=>{
        e.preventDefault();
        let valid = true
        Object.values(user).forEach((value)=>{
            if(value== null){
                valid = false
            }
        })
        if(valid){
            mutate(user, {
                onSuccess: (data)=>{
                    localStorage.setItem('Token', data.data)
                    document.location.pathname = '/home'
                }
            })
        }

    }

    return(
        <form onSubmit={handleSubmit}>
            <div className={`${classes.wrapper} flex flex-col gap-y-3.5`}>
                <Typography style={{textAlign: 'center'}} variant="h3">Salam, xoş gördük! 👋</Typography>
                <Input
                    onChange={(e) => setUser({...user, emailOrUsername: e.target.value})}
                    type='text' label={'Email'}
                    required
                />
                <Input
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    type="password" label={'Şifrə'}
                    required
                />
                <Button type="submit" style={{background: Colors.darkBlue}}>Daxil ol</Button>
                <Typography style={{textAlign: 'center'}} variant="paragraph">
                    Hesabınız yoxdur ? <a className={classes.anchorStyle} onClick={() => {
                    props.setIsLogin(false)
                }}>Qeydiyyat</a>
                </Typography>
            </div>
        </form>

    )
}