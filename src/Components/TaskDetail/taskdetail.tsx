import React, { FunctionComponent, useRef, useEffect } from "react";
import  style  from "./style.module.scss"
import { useParams, useLocation } from 'react-router-dom'


const TaskDetail: FunctionComponent = (): React.JSX.Element => {
    let task = useParams()
    const lokation = useLocation()
    console.log(task.taskId)
    console.log(lokation.state)
    
    return ( 
        <div className={style.taskDetail}>
            <span className={style.footer__text}>окно открыто</span>
            <span className={style.footer__text}></span>
        </div>
    )
}


export default TaskDetail