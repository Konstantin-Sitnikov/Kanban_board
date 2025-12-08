import React, { FunctionComponent } from "react";

import  style  from "./style.module.scss"
import {Items} from '../../types'


const dataMock = {
    backlog: [
        {
            title: "Задача 1",
            description: "Надо что то сделать!!"
        },

        {
            title: "Задача 2",
            description: "Надо еще что то сделать!!"
        },
        ]
}


const ListItems: FunctionComponent<Items> = ({title}): React.JSX.Element => {
    return (
        <li>{`${title}`}</li>
    )
}


function List({dataList}:any) {
    console.log(dataList)
    return (<ul>
        <>
        {dataList.map((data:any) => {
            return (<ListItems title={data.title}/>)
            })}
        </>
    </ul>)
}


function Main() {
    return (
        <div className={style.main}>
            <List dataList={dataMock.backlog}/>
        </div>
    )
}


export default Main
