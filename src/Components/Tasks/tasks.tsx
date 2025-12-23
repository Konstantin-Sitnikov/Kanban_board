import React, { FunctionComponent, ReactElement, useRef, useEffect, useState} from "react";
import {Items, TypeList, DataTasks} from '../../types'
import { DropdownForm, InputForm} from '../Forms/forms'
import { ButtonAddForm } from '../Button/button'
import { getTaskList } from '../LocalStorage/localstorage'
import style from './style.module.scss'
import styleButton from '../Button/style.module.scss'


const TaskItems: FunctionComponent<Items> = ({title}): React.JSX.Element => {
    return (
        <li className={style.task__item}>{`${title}`}</li>
    )
}

const TaskList: FunctionComponent<TypeList> = ({listName, taskList, setTaskList, dropdownList, setDropdownList}): React.JSX.Element => {
    
    const refForm = useRef<HTMLDivElement | null>(null)
    const refButton = useRef<HTMLButtonElement | null>(null)
    
    let form: ReactElement | null = null
    
    function clickButton() {
            const form: any = refForm.current
            const button: any = refButton.current
        if (!button.classList.contains(styleButton.button_active)) {
            form.style.display = "flex"
            button.classList.add(styleButton.button_active)
        } else {
            form.style.display = "none"
            button.classList.remove(styleButton.button_active) 
        }
    }

    if (listName === "backlog") {
        form = <InputForm ref={refForm} list={taskList} setTask={setTaskList}/>                                               
    } else {
        form = <DropdownForm ref={refForm} taskList={taskList} dropdownList={dropdownList}setTaskList={setTaskList} setDropdownList={setDropdownList} />
    }
                    

    return (
        <div  className={style.task}>
            <span  className={style.task__titel}>{listName}</span>
            <ul className={style.task__list}>        
                {
                    taskList.map((task:any) => {
                        return (<TaskItems key={task.id} title={task.title}/>)
                    })
                }  
            </ul>

                {   
                    form
                }
                                
                <ButtonAddForm ref={refButton} onClick={clickButton}>Add card</ButtonAddForm>
                                           
        </div>
      
        )
    }



    const Tasks: FunctionComponent<DataTasks> = ({setActiveTasks, setFinishedTasks}): React.JSX.Element => {

    const [backlog, setBacklog] = useState(getTaskList("backlog"))
    const [ready, setReady] = useState(getTaskList("ready"))
    const [progress, setProgress] = useState(getTaskList("progress"))
    const [finished, setFinished] = useState(getTaskList("finished"))

    useEffect(()=>{
        localStorage.setItem("backlog", JSON.stringify(backlog))
        setActiveTasks(backlog.length)
    }, [backlog])
    
    
    useEffect(()=>{
        localStorage.setItem("ready", JSON.stringify(ready))
    }, [ready])
    

    useEffect(()=>{
        localStorage.setItem("progress", JSON.stringify(progress))
    }, [progress])

    useEffect(()=>{
        localStorage.setItem("finished", JSON.stringify(finished))
        setFinishedTasks(finished.length)
    }, [finished])

    
    return (
        <>
            <TaskList listName="backlog" taskList={backlog} setTaskList={setBacklog}/>
            <TaskList listName="ready" taskList={ready} dropdownList={backlog} setTaskList={setReady} setDropdownList={setBacklog}/>
            <TaskList listName="In Progress" taskList={progress} dropdownList={ready} setTaskList={setProgress} setDropdownList={setReady}/>
            <TaskList listName="finished" taskList={finished} dropdownList={progress} setTaskList={setFinished} setDropdownList={setProgress}/>
        </>
    )
}





export default Tasks