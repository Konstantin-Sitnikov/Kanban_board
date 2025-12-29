import React, { FunctionComponent } from "react";
import  style  from "./style.module.scss"
import Tasks from "../Tasks/tasks";
import { Routes, Route } from 'react-router-dom'
import TaskDetail from "../TaskDetail/taskdetail";
import {DataMain} from "../../types"



const Main: FunctionComponent<DataMain> = ({setActiveTasks, setFinishedTasks}): React.JSX.Element => {

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

