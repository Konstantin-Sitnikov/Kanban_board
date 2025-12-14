import React, { FunctionComponent, useRef, useState, ComponentPropsWithRef} from "react";
import {Items, List, TypeList} from '../../types'
import style from './style.module.scss'


const TaskItems: FunctionComponent<Items> = ({title}): React.JSX.Element => {
    return (
        <li className={style.task__item}>{`${title}`}</li>
    )
}

function InputForm(props: ComponentPropsWithRef<"input">) {
    return <input className={style.input} type="text" placeholder="Введите задачу" {...props} />

}

function ButtonBacklog(props: ComponentPropsWithRef<"button">){
    return <button className={style.button} {...props}>Add card</button>
}
const Backlog: FunctionComponent<List> = ({listName, taskList, setTaskList}): React.JSX.Element => {
    
    const refForm = useRef<HTMLInputElement>(null)
    const refButton = useRef<HTMLButtonElement>(null)
    const [countId, setCountId] = useState(0) 

    function addForm() {
        
        const button:any = refButton.current
        const form:any = refForm.current
        if (!button.classList.contains(style.button_submit)) {

            form.style.display = "flex"
            form.focus()
            button.classList.add(style.button_submit)
            button.textContent = "Submit"
        }   else {

           
            if(!form.value) {
                return
            }
            
            setTaskList([...taskList, {id:countId, title:form.value, description:"This task has no description"}])
            setCountId(countId + 1)
            form.value = ""
            form.style.display = "none"
            button.classList.remove(style.button_submit)
            button.textContent = "Add card"
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
                <InputForm ref={refForm}/>   
            </ul>
                <ButtonBacklog ref={refButton} onClick={addForm}/>
                        
        </div>
   
        )
    }

//taskList dropdownList
    export const Ready: FunctionComponent<TypeList> = ({listName, taskList, dropdownList, setTaskList, setDropdownList}): React.JSX.Element => {
    
    const refForm = useRef(null)
    const refButton = useRef(null)

    function clickDropdown(e:any) {
            let id = Number(e.target.dataset.id)
            console.log(dropdownList.filter((item:any) => item.id === id))
            setTaskList([...taskList, dropdownList.filter((item:any) => item.id === id)[0]])
            setDropdownList(dropdownList.filter((item:any) => item.id !== id))
            
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
                <div ref={refForm} className={style.form__dropdown}> 
                    <button className={style.task__dropdown}></button>
                    <ul className={style.menu__dropdown}>
                        {
                            dropdownList.map((task:any) => {
                                return (<li key={task.id} data-id={task.id} onClick={(e) => {clickDropdown(e)}} className={style.task__item}>{`${task.title}`}</li>)
                            })
                        }
                    </ul>
                </div>
               
                   
            </ul>
                <button className={style.button} ref={refButton} onClick={()=>{}}>
                     Add card
                </button>
                           
        </div>
      
        )
    }







export default Backlog