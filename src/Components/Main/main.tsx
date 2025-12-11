import React, { useState } from "react";
import  style  from "./style.module.scss"
import TaskList from "../TaskList/tasklist";
import {DataTask} from '../../types'


const dataMock: DataTask = {
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

}

const backlogTask: DataTask = {
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

}

const readyTask:DataTask ={
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
}



 function Main() {

    const [backlog, setBacklog] = useState(backlogTask.backlog)
    const [ready, setReady] = useState(readyTask.ready)
        
    function setTaskBacklog () {
            setBacklog([...backlog, {id:10, title:"Задача 10", description:"Выполни задачу"}])
        }

    function setTaskReady () {
            setBacklog([...backlog, {id:10, title:"Задача 10", description:"Выполни задачу"}])
            setReady([...ready, {id:10, title:"Задача 10", description:"Выполни задачу"}])
        }

    return (
        <div className={style.main}>
            <TaskList listName="backlog" dataList={backlog} onClick={setTaskBacklog}/>
            <TaskList listName="ready" dataList={ready} onClick={setTaskReady}/>
        </div>
    )
}


export default Main


/*
 Object.entries(dataMock).map(([taskName, taskDate], ind) => {
                    
                return (<TaskList key={ind} listName={taskName} dataList={taskDate} />)
                   
                })

*/ 