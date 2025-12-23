import React, { useEffect, useState, useCallback } from "react";
import  style  from "./style.module.scss"
import TaskList from "../TaskList/tasklist";
import Backlog from "../TaskList/backlog";
//import {DataTask} from '../../types'
import { Routes, Route } from 'react-router-dom'
import TaskDetail from "../TaskDetail/taskdetail";


function getLocalStorage(key:string) {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key)!)
    } else {
        return []
    }
}

function Tasks({setActiveTasks, setFinishedTasks}:any) {

    const [backlog, setBacklog] = useState(getLocalStorage("backlog"))
    const [ready, setReady] = useState(getLocalStorage("ready"))
    const [progress, setProgress] = useState(getLocalStorage("progress"))
    const [finished, setFinished] = useState(getLocalStorage("finished"))

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
            <Backlog listName="backlog" taskList={backlog} setTaskList={setBacklog}/>
            <TaskList listName="ready" taskList={ready} dropdownList={backlog} setTaskList={setReady} setDropdownList={setBacklog}/>
            <TaskList listName="In Progress" taskList={progress} dropdownList={ready} setTaskList={setProgress} setDropdownList={setReady}/>
            <TaskList listName="finished" taskList={finished} dropdownList={progress} setTaskList={setFinished} setDropdownList={setProgress}/>
        </>
    )
}


 function Main({setActiveTasks, setFinishedTasks}:any) {


 
    return (
        <div id="main" className={style.main}>

            <Routes>
                <Route path="/" element={<Tasks setActiveTasks={setActiveTasks} setFinishedTasks={setFinishedTasks}/>}></Route>
                <Route path="/tasks/:taskId" element={<TaskDetail/>}></Route>
            </Routes>
            


        </div>
    )
}


export default Main

