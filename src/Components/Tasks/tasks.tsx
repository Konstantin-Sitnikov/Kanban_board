import React, { FunctionComponent, ReactElement, useRef, useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import { TypeList, DataTasks} from '../../types'
import { DropdownForm, InputForm} from '../Forms/forms'
import { Button } from '../Button/button'
import { getTaskList } from '../LocalStorage/localstorage'
import style from './style.module.scss'
import styleButton from '../Button/style.module.scss'

const TaskList: FunctionComponent<TypeList> = ({listName, taskList, setTaskList, dropdownList, setDropdownList}): React.JSX.Element => {
    
    const refForm = useRef<HTMLDivElement | null>(null)
    const refButton = useRef<HTMLButtonElement | null>(null)
    const [disabledButton,  setDisabledButton] = useState<boolean>(false)
    
    let form: ReactElement | null = null

    useEffect(()=>{

        if((listName !== "backlog") && (dropdownList.length === 0)) {
            setDisabledButton(true)
        } else { 
            setDisabledButton(false)               
        }
    }, [dropdownList])

    useEffect(()=> {
        const form: HTMLDivElement | null = refForm.current
        const button: HTMLButtonElement | null = refButton.current
        if (disabledButton){
            if(form && button) {
                form.style.display = "none"
                button.classList.remove(styleButton.button__addForm_active)
            }}
    }, [disabledButton])

    
    function clickButton():void {
            const form: HTMLDivElement | null = refForm.current
            const button: HTMLButtonElement | null = refButton.current
        if(form && button) {
            if (!button.classList.contains(styleButton.button__addForm_active)) {
            form.style.display = "flex"
            button.classList.add(styleButton.button__addForm_active)
        } else {
            form.style.display = "none"
            button.classList.remove(styleButton.button__addForm_active) 
        }}}

    if (listName === "backlog") {
        form = <InputForm ref={refForm} list={taskList} setTask={setTaskList}/>                                               
    } else {
        form = <DropdownForm ref={refForm} taskList={taskList} dropdownList={dropdownList} setTaskList={setTaskList} setDropdownList={setDropdownList} />
    }
                    

    return (
        <div  className={style.task}>
            <span  className={style.task__titel}>{listName}</span>
            <ul className={style.task__list}>        
                {
                    taskList.map((task:any) => {
                        return (<li key={task.id} className={style.task__item}>
                                    <Link key={task.id} to={`/tasks/${task.id}`} className={style.task__link} state={{"listName":listName, "taskTitle": task.title, "taskDescription": task.description}}>{task.title}</Link>
                                </li>)
                    })
                }  
            </ul>

            {   
                form
            }
                            
            <Button ref={refButton} disabled={disabledButton} className={styleButton.button__addForm} onClick={clickButton}>Add card</Button>
                                           
        </div>
      
        )
    }



    const Tasks: FunctionComponent<DataTasks> = ({setActiveTasks, setFinishedTasks}): React.JSX.Element => {

    const [backlog, setBacklog] = useState(getTaskList("backlog"))
    const [ready, setReady] = useState(getTaskList("ready"))
    const [progress, setProgress] = useState(getTaskList("In Progress"))
    const [finished, setFinished] = useState(getTaskList("finished"))

  

    useEffect(()=>{
        localStorage.setItem("backlog", JSON.stringify(backlog))
        setActiveTasks(backlog.length)
    }, [backlog])
    
    
    useEffect(()=>{
        localStorage.setItem("ready", JSON.stringify(ready))
    }, [ready])
    

    useEffect(()=>{
        localStorage.setItem("In Progress", JSON.stringify(progress))
    }, [progress])

    useEffect(()=>{
        localStorage.setItem("finished", JSON.stringify(finished))
        setFinishedTasks(finished.length)
    }, [finished])

    
    return (
        <>
            <TaskList listName="backlog" taskList={backlog} setTaskList={setBacklog} dropdownList={[]} setDropdownList={()=>{}}/>
            <TaskList listName="ready" taskList={ready} dropdownList={backlog} setTaskList={setReady} setDropdownList={setBacklog}/>
            <TaskList listName="In Progress" taskList={progress} dropdownList={ready} setTaskList={setProgress} setDropdownList={setReady}/>
            <TaskList listName="finished" taskList={finished} dropdownList={progress} setTaskList={setFinished} setDropdownList={setProgress}/>
        </>
    )
}





export default Tasks