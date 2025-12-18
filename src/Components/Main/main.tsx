import React, { useState } from "react";
import  style  from "./style.module.scss"
import TaskList from "../TaskList/tasklist";
import Backlog from "../TaskList/backlog";
import {DataTask} from '../../types'


/*const dataMock: DataTask = {
    backlog: [
        {   id: 1,
            title: "Задача 1",
            description: "Надо что то сделать!!"
        },

        {   id: 2,
            title: "Задача 2",
            description: "Надо еще что то сделать!!"
        },
        ],
    
    ready: [
        {   id: 3,
            title: "Задача 3",
            description: "Надо что то сделать!!"
        },

        {   id: 4,
            title: "Задача 4",
            description: "Надо еще что то сделать!!"
        },
        ],
    "In Progress": [
        {   id: 5,
            title: "Задача 5",
            description: "Надо что то сделать!!"
        },

        {   id: 6,
            title: "Задача 6",
            description: "Надо еще что то сделать!!"
        },
        ],
    finished:[
        {   id: 7,
            title: "Задача 7",
            description: "Надо что то сделать!!"
        },

        {   id: 8,
            title: "Задача 8",
            description: "Надо еще что то сделать!!"
        },
        ]

}*/

const backlogTask: DataTask = {
    backlog: [
        /*{   id: 1,
            title: "Задача 1",
            description: "Надо что то сделать!!"
        },

        {   id: 2,
            title: "Задача 2",
            description: "Надо еще что то сделать!!"
        },
        */],

}


const readyTask:DataTask ={
    ready: [
        /*{   id: 3,
            title: "Задача 3",
            description: "Надо что то сделать!!"
        },

        {   id: 4,
            title: "Задача 4",
            description: "Надо еще что то сделать!!"
        },*/
        ],
}

const progressTask: DataTask = {
    progress: [
        /*{   id: 1,
            title: "Задача 1",
            description: "Надо что то сделать!!"
        },

        {   id: 2,
            title: "Задача 2",
            description: "Надо еще что то сделать!!"
        },
        */],
}

const finishedTask: DataTask = {
    finished: [
        /*{   id: 1,
            title: "Задача 1",
            description: "Надо что то сделать!!"
        },

        {   id: 2,
            title: "Задача 2",
            description: "Надо еще что то сделать!!"
        },
        */],
}



 function Main() {

    const [backlog, setBacklog] = useState(backlogTask.backlog)
    const [ready, setReady] = useState(readyTask.ready)
    const [progress, setProgress] = useState(progressTask.progress)
    const [finished, setFinished] = useState(finishedTask.finished)
            
 
    return (
        <div id="main" className={style.main}>
            <Backlog listName="backlog" taskList={backlog} setTaskList={setBacklog}/>
            <TaskList listName="ready" taskList={ready} dropdownList={backlog} setTaskList={setReady} setDropdownList={setBacklog}/>
            <TaskList listName="In Progress" taskList={progress} dropdownList={ready} setTaskList={setProgress} setDropdownList={setReady}/>
            <TaskList listName="finished" taskList={finished} dropdownList={progress} setTaskList={setFinished} setDropdownList={setProgress}/>
        </div>
    )
}


export default Main

