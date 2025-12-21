import React, { FunctionComponent, useRef, useState } from "react";
import {List} from '../../types'
import { Link } from 'react-router-dom'
import { InputForm } from '../Forms/forms'

import style from './style.module.scss'



const Backlog: FunctionComponent<List> = ({listName, taskList, setTaskList}): React.JSX.Element => {
    
    console.log(taskList)
    const refForm = useRef<HTMLDivElement | null>(null)
    const refButtonAddForm = useRef<HTMLButtonElement | null>(null)

    
    const [countId, setCountId] = useState(0)
    const [valueForm, setValueForm] = useState("")

 

    function addForm() {

        const button:any = refButtonAddForm.current
        const form:any = refForm.current
        console.log(form)

        if (!button.classList.contains(style.button_active)) {
            form.style.display = "flex"
            form.focus()
            button.classList.add(style.button_active)

        }   else {    
          
            form.style.display = "none"
            button.classList.remove(style.button_active)
           
        }
    }
    
    function clickButtonSumbit() {
        setTaskList([...taskList, {id:countId, title:valueForm, description:"This task has no description"}])
        setCountId(countId + 1)
        setValueForm("")
    }



    return (
        <div  className={style.task}>
            <span  className={style.task__titel}>{listName}</span>
            <ul className={style.task__list}>        
                {
                    taskList.map((task:any) => {
                        console.log("re")
                        return ( <li key={task.id} className={style.task__item}><Link to={`/tasks/${task.id}`}>{`${task.title}`}</Link></li>)
                    })
                }
                  
            </ul>

            <InputForm ref={refForm} list={taskList} setTask={setTaskList}/>

            <button ref={refButtonAddForm} className={style.button} onClick={addForm}>Add card</button>
                    
              
                        
        </div>
   
        )
    }




export default Backlog