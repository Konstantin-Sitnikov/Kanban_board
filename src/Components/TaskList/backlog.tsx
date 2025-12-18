import React, { FunctionComponent, useRef, useState, useEffect} from "react";
import {List} from '../../types'
import TaskDetail from "../TaskDetail/taskdetail";

import style from './style.module.scss'


const Backlog: FunctionComponent<List> = ({listName, taskList, setTaskList}): React.JSX.Element => {
    
    const refForm = useRef<HTMLInputElement | null>(null)
    const refButtonAddForm = useRef<HTMLButtonElement | null>(null)
    const refButtonSumbit = useRef<HTMLButtonElement | null>(null)
    
    const [countId, setCountId] = useState(0)
    const [valueForm, setValueForm] = useState("")
    const [taskDetail, setTaskDetail] = useState(false)

    useEffect(()=>{

        const buttonSumbit:any = refButtonSumbit.current
        const buttonForm:any = refButtonAddForm.current

        if (valueForm !== "") {
            buttonSumbit.style.display = "block"
            buttonForm.style.display = "none"
        } else {
            buttonSumbit.style.display = "none"
            buttonForm.style.display = "block"
        }
    }, [valueForm])
 

    function addForm() {

        const button:any = refButtonAddForm.current
        const form:any = refForm.current

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

    function clickTask () {
        if (!taskDetail) {
            setTaskDetail(true)
        } else {
            setTaskDetail(false)
        }
        
    }


    return (
        <div  className={style.task}>
            <span  className={style.task__titel}>{listName}</span>
            <ul className={style.task__list}>        
                {
                    taskList.map((task:any) => {
                        return ( <li key={task.id} className={style.task__item} onClick={clickTask}>{`${task.title}`}</li>)
                    })
                }
                  
            </ul>
                <input ref={refForm} value={valueForm} onChange={event => setValueForm(event.target.value)} className={style.input} type="text" placeholder="Введите задачу"  /> 
                
                <div>
                    <button ref={refButtonAddForm} className={style.button} onClick={addForm}>Add card</button>
                    <button ref={refButtonSumbit} className={style.button_sumbit} onClick={clickButtonSumbit}>Submit</button>
                </div> 
                {
                   taskDetail ?  (
                    <TaskDetail/>
                   ) : null
                }
                        
        </div>
   
        )
    }




export default Backlog