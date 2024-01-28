import classes from './style.module.scss'
import CustomBox from '../../components/CustomBox';
import Login from './components/Login/Login';
import {useState} from 'react';
import Signup from './components/Signup/Signup';



export default ()=>{
    const [isLogin, seIsLogin] = useState<boolean>(true)
    return(
        <div className={`w-full h-full grid place-content-center ${classes.backgroundGradient}`}>
          <CustomBox>
              {isLogin ? <Login setIsLogin={seIsLogin}/> : <Signup setIsLogin={seIsLogin}/>}
          </CustomBox>
        </div>
    )
}