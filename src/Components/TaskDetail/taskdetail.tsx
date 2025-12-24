import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import  style  from "./style.module.scss"
import { useParams, useLocation } from 'react-router-dom'
import { getTaskList } from '../LocalStorage/localstorage'


const TaskDetail: FunctionComponent = (): React.JSX.Element => {
    const id = useParams()
    console.log(id)
    const lokation = useLocation()
    let tasklist = getTaskList(lokation.state.listName)
    console.log(lokation.state.listName)
    const [titel, setTitel] = useState<string>("")
    const [description, setDescription] = useState<string>("")

useEffect(()=>{
    for(let task of tasklist) {      
        if (task.id === Number(id.taskId)) {
            setTitel(task.title)
            setDescription(task.description)
        }
    }},)

    
  
    
    return ( 
        <div className={style.taskDetail}>
            <span className={style.footer__text}>{titel}</span>
            <span className={style.footer__text}>{description}</span>

        </div>
    )
}


export default TaskDetail