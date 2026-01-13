import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import  style  from "./style.module.scss"
import { useParams, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getTaskList } from '../LocalStorage/localstorage'


const TaskDetail: FunctionComponent = (): React.JSX.Element => {
    const id = useParams()

    const lokation = useLocation()
    const refDescription = useRef(null)
    const refFormDescription = useRef(null)
    const [description, setDescription] = useState<string>(lokation.state.taskDescription)
    const [save, setSave] = useState<boolean>(false)
 

    useEffect(()=>{
        if(save) {
            const tasklist = getTaskList(lokation.state.listName)
            tasklist.splice(tasklist.indexOf(tasklist.filter((item:any) => item.id === Number(id.taskId))[0]), 1, {id:Number(id.taskId), title:lokation.state.taskTitle, description:description})
            localStorage.setItem(lokation.state.listName, JSON.stringify(tasklist))
        }

    },[description])
  
    useEffect(()=>{

        const text:any = refDescription.current
        const input:any = refFormDescription.current

        function clickText(e:any) {
            text.style.display = "none"
            input.style.display = "flex"
            input.focus()
            input.value = e.currentTarget.innerText
          }

        function clickEnter(e:any) {
            if(e.key ==="Enter") {
                text.style.display = "flex"
                input.style.display = "none"
                setSave(true)
                setDescription(input.value)
            }
        }
        function clickEscape(e:any) {
            if(e.key ==="Escape"){
            text.style.display = "flex"
            input.style.display = "none"
            }
        }

        text.addEventListener("click", clickText)
        input.addEventListener("keydown", clickEnter)
        input.addEventListener("keydown", clickEscape)
        return () => {
            text.removeEventListener("click", clickText)
            input.removeEventListener("keydown", clickEnter)
            input.removeEventListener("keydown", clickEscape)
        }
    },[])

    
  
    
    return ( 
        <div className={style.taskDetail}>
            <span className={style.taskDetail__title}>{lokation.state.taskTitle}</span>
            <span ref={refDescription} className={style.taskDetail__description}>{description}</span>
            <textarea ref={refFormDescription} className={style.input} />
            <Link className={style.link} to="/"><hr className={style.line__horizontal}/> <hr className={style.line__vertical}/></Link>
        </div>
    )
}
export default TaskDetail