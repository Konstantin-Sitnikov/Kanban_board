import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import  style  from "./style.module.scss"
import { useParams, useLocation } from 'react-router-dom'
import { getTaskList } from '../LocalStorage/localstorage'


const TaskDetail: FunctionComponent = (): React.JSX.Element => {
    const id = useParams()
    const lokation = useLocation()
    const refDescription = useRef(null)

    const refFormDescription = useRef(null)
    let tasklist = getTaskList(lokation.state.listName)
    const [title, setTitel] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [valueForm, setValueForm] = useState<string>("")

    useEffect(()=>{
        const form:any = refFormDescription.current
        for(let task of tasklist) {      
            if (task.id === Number(id.taskId)) {
                setTitel(task.title)
                setDescription(task.description)
                form.value = task.description
            }
        }},)

    useEffect(()=>{
        const text:any = refDescription.current
        const input:any = refFormDescription.current

        function clickText() {
            text.style.display = "none"
            input.style.display = "flex"
        }
        function clickEnter(e:any) {
            if(e.key ==="Enter"){
            text.style.display = "flex"
            input.style.display = "none"
            setDescription(input.value)
            console.log(input.value)
            }
        }

        text.addEventListener("click", clickText)
        input.addEventListener("keydown", clickEnter)
    },[])

    
  
    
    return ( 
        <div className={style.taskDetail}>
            <span className={style.taskDetail__title}>{title}</span>
            <span ref={refDescription} className={style.taskDetail__description}>{description}</span>
            <input ref={refFormDescription} className={style.input} type="text"  />
            
        </div>
    )
}


export default TaskDetail