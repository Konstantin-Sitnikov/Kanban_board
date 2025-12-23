import React, { FunctionComponent, useRef} from "react";
import {Items, TypeList} from '../../types'
import { DropdownForm} from '../Forms/forms'
import style from './style.module.scss'


const TaskItems: FunctionComponent<Items> = ({title}): React.JSX.Element => {
    return (
        <li className={style.task__item}>{`${title}`}</li>
    )
}

//taskList dropdownList
const TaskList: FunctionComponent<TypeList> = ({listName, taskList, dropdownList, setTaskList, setDropdownList}): React.JSX.Element => {
    const refForm = useRef(null)
    const refButton = useRef(null)



    
    function clickButton() {
            const form:any = refForm.current
            const button:any = refButton.current
        if (!button.classList.contains(style.button_active)) {
            form.style.display = "flex"
            button.classList.add(style.button_active)
        } else {
            form.style.display = "none"
            button.classList.remove(style.button_active)
        }
    }


    return (
        <div  className={style.task}>
            <span  className={style.task__titel}>{listName}</span>
            <ul className={style.task__list}>        
                {
                    taskList.map((data:any) => {
                        return (<TaskItems key={data.id} title={data.title}/>)
                    })
                }  
            </ul>

                <DropdownForm ref={refForm} taskList={taskList} dropdownList={dropdownList}setTaskList={setTaskList} setDropdownList={setDropdownList} />
                    
                
                <button className={style.button} ref={refButton} onClick={()=>{
                    clickButton()
                }}>
                     Add card
                </button>
                           
        </div>
      
        )
    }







export default TaskList