import React, { FunctionComponent, useRef, useState, useEffect, useCallback } from "react";
import  style  from "./style.module.scss"
import { useParams, useLocation } from 'react-router-dom'
import { getTaskList } from '../LocalStorage/localstorage'


const TaskDetail: FunctionComponent = (): React.JSX.Element => {
    const id = useParams()
    const lokation = useLocation()
    const refDescription = useRef(null)
    const refFormDescription = useRef(null)
    const [description, setDescription] = useState<string>(lokation.state.taskDescription)
    const [valueForm, setValueForm] = useState<string>(lokation.state.taskDescription)
    

        function clickText() {
            const text:any = refDescription.current
            const input:any = refFormDescription.current
            text.style.display = "none"
            input.style.display = "flex"
            input.focus()
        }
        function clickEnter(e:any) {
            const text:any = refDescription.current
            const input:any = refFormDescription.current
            if(e.key ==="Enter"){
                text.style.display = "flex"
                input.style.display = "none"
                setDescription(input.value)
                setValueForm(input.value)
            }
        }
        function clickEscape(e:any) {
            const text:any = refDescription.current
            const input:any = refFormDescription.current
            if(e.key ==="Escape"){
            text.style.display = "flex"
            input.style.display = "none"

            setValueForm(description)
            console.log(input.value)
            }
        }





    useEffect(()=>{

        const text:any = refDescription.current
        const input:any = refFormDescription.current



        text.addEventListener("click", clickText)
        input.addEventListener("keydown", clickEnter)
        input.addEventListener("keydown", clickEscape)
    },[])

    
  
    
    return ( 
        <div className={style.taskDetail}>
            <span className={style.taskDetail__title}>{lokation.state.taskTitle}</span>
            <span ref={refDescription} className={style.taskDetail__description}>{description}</span>
            <textarea ref={refFormDescription} value={valueForm} onChange={event => setValueForm(event.target.value)} className={style.input} />
            
        </div>
    )
}


export default TaskDetail