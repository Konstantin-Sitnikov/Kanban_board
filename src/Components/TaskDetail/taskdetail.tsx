import React, { FunctionComponent, useRef, useState, useEffect, useCallback } from "react";
import  style  from "./style.module.scss"
import { useParams, useLocation } from 'react-router-dom'
import { getTaskList } from '../LocalStorage/localstorage'


const TaskDetail: FunctionComponent = (): React.JSX.Element => {
    const id = useParams()
    const lokation = useLocation()
    const refDescription = useRef(null)
    const refFormDescription = useRef(null)
    const [title, setTitel] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [valueForm, setValueForm] = useState<string>("")
    let tasklist = getTaskList(lokation.state.listName)
    

      
        for(let task of tasklist) {      
            if (task.id === Number(id.taskId)) {
                setTitel(task.title)           
                setDescription(task.description)
                setValueForm(task.description)
                console.log("1")
            }}



    useEffect(()=>{

        const text:any = refDescription.current
        const input:any = refFormDescription.current

        function clickText() {
            text.style.display = "none"
            input.style.display = "flex"
            input.focus()
        }
        function clickEnter(e:any) {
            if(e.key ==="Enter"){
            text.style.display = "flex"
            input.style.display = "none"
            setDescription(input.value)
            }
        }
        function clickEscape(e:any) {
            if(e.key ==="Escape"){
            //text.style.display = "flex"
            //input.style.display = "none"
            console.log(description)
            //setValueForm(text.value)
            }
        }

        text.addEventListener("click", clickText)
        input.addEventListener("keydown", clickEnter)
        input.addEventListener("keydown", clickEscape)
    },[])

    
  
    
    return ( 
        <div className={style.taskDetail}>
            <span className={style.taskDetail__title}>{title}</span>
            <span ref={refDescription} className={style.taskDetail__description}>{description}</span>
            <textarea ref={refFormDescription} value={valueForm} onChange={event => setValueForm(event.target.value)} className={style.input} />
            
        </div>
    )
}


export default TaskDetail