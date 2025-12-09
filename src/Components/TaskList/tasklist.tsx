import React, { FunctionComponent } from "react";
import {Items, List} from '../../types'
import style from './style.module.scss'
import Button, {clickButton} from "../Button/button";

const TaskItems: FunctionComponent<Items> = ({title}): React.JSX.Element => {
    return (
        <li className={style.task__item}>{`${title}`}</li>
    )
}


const TaskList: FunctionComponent<List> = ({listName, dataList}): React.JSX.Element => {
    return (
        <div className={style.task}>
            <span className={style.task__titel}>{listName}</span>
            <ul className={style.task__list}>        
                {
                    dataList.map((data:any) => {
                        return (<TaskItems key={data.id} title={data.title}/>)
                    })
                }    
            </ul>
                <Button id={listName} onClick={clickButton}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z" fill="#5E6C84"/>
                    </svg> Add card
                </Button>
                
            
        </div>

        
        )
    }


export default TaskList