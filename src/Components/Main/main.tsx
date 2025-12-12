import React, { useState } from "react";
import  style  from "./style.module.scss"
import Backlog, {Ready} from "../TaskList/tasklist";
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
        
    function setTaskBacklog(id:number, title:string) {
            console.log(id)
            setBacklog([...backlog, {id:id, title:title, description:"This task has no description"}])
        }

    function setTaskReady(id:any) {
            setBacklog([...backlog, {id:10, title:"Задача 10", description:"Выполни задачу"}])
            setReady([...ready, {id:10, title:"Задача 10", description:"Выполни задачу"}])
            console.log(id)
        }

    return (
        <div className={style.main}>
            <Backlog listName="backlog" dataList={backlog} onClick={setTaskBacklog}/>
            <Ready listName="ready" dataList={ready} data={backlog} onClick={setTaskReady}/>
        </div>
    )
}


export default Main


/*
 Object.entries(dataMock).map(([taskName, taskDate], ind) => {
                    
                return (<TaskList key={ind} listName={taskName} dataList={taskDate} />)
                   
                })
<TaskList listName="ready" dataList={ready} onClick={setTaskReady}/>


*/ 