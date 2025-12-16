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
    const form:any = refForm.current
    const button:any = refButton.current

    function clickDropdown(e:any) {
            let id = Number(e.target.dataset.id)
            console.log(dropdownList.filter((item:any) => item.id === id))
            setTaskList([...taskList, dropdownList.filter((item:any) => item.id === id)[0]])
            setDropdownList(dropdownList.filter((item:any) => item.id !== id))    
        }
    
    function clickButton() {

        if (!button.classList.contains(style.button_active)) {
            console.log(!button.classList.contains(style.button_active))
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

                <DropdownForm ref={refForm}>
                    {
                        dropdownList.map((task:any) => {
                            return (<li key={task.id} data-id={task.id} onClick={(e) => {clickDropdown(e)}} className={style.task__item_dropdown}>{`${task.title}`}</li>)
                        })
                    }
                </DropdownForm>
                
                
                <button className={style.button} ref={refButton} onClick={()=>{
                    clickButton()
                }}>
                     Add card
                </button>
                           
        </div>
      
        )
    }







export default TaskList