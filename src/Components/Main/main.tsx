import  style  from "./style.module.scss"
import TaskList from "../TaskList/tasklist";
import {Mock} from '../../types'

const dataMock: Mock = {
    backlog: [
        {
            title: "Задача 1",
            description: "Надо что то сделать!!"
        },

        {
            title: "Задача 2",
            description: "Надо еще что то сделать!!"
        },
        ],
    
    ready: [
        {
            title: "Задача 3",
            description: "Надо что то сделать!!"
        },

        {
            title: "Задача 4",
            description: "Надо еще что то сделать!!"
        },
        ],
    "In Progress": [
        {
            title: "Задача 5",
            description: "Надо что то сделать!!"
        },

        {
            title: "Задача 6",
            description: "Надо еще что то сделать!!"
        },
        ],
    Finished:[
        {
            title: "Задача 7",
            description: "Надо что то сделать!!"
        },

        {
            title: "Задача 8",
            description: "Надо еще что то сделать!!"
        },
        ]



}


 function Main() {

    return (
        <div className={style.main}>
            {
                Object.entries(dataMock).map(([key, val]) => { 
                   return (<TaskList listName={key} dataList={val}/>)
                })
            }
            
        </div>
    )
}


export default Main
