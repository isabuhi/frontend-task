import {ReactElement} from 'react';
import classes from './style.module.scss'
interface Props {
    classNames?: string
    children: ReactElement
}

export default (props: Props)=>{
    return (
        <div className={(props.classNames || classes.defaultStyle) + ' w-fit'}>
            {props.children}
        </div>
    )
}