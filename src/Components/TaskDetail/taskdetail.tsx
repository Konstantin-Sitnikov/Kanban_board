import React, { FunctionComponent, useRef, useEffect } from "react";
import  style  from "./style.module.scss"
import { useParams } from 'react-router-dom'


const TaskDetail: FunctionComponent = (): React.JSX.Element => {
    let task = useParams()
    console.log(task.taskId)
    return ( 
        <div className={style.taskDetail}>
            <span className={style.footer__text}>окно открыто</span>
            <span className={style.footer__text}></span>
        </div>
    )
}


export default TaskDetail