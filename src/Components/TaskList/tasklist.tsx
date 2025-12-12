import React, { FunctionComponent, useRef } from "react";
import {Items, List} from '../../types'
import style from './style.module.scss'


const TaskItems: FunctionComponent<Items> = ({title}): React.JSX.Element => {
    return (
        <li className={style.task__item}>{`${title}`}</li>
    )
}


const Backlog: FunctionComponent<List> = ({listName, dataList, onClick}): React.JSX.Element => {
    
    const refForm = useRef(null)
    const refButton = useRef(null)

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
            onClick(5, form.value)
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
                    dataList.map((data:any) => {
                        return (<TaskItems key={data.id} title={data.title}/>)
                    })
                }
                <input className={style.input} ref={refForm} type="text" placeholder="Введите задачу"/>   
            </ul>
                <button className={style.button} ref={refButton} onClick={addForm}>
                     Add card
                </button>
                           
        </div>

        
        )
    }





    export const Ready: FunctionComponent<List> = ({listName, dataList, data, onClick}): React.JSX.Element => {
    
    const refButton = useRef(null)

    function clickDropdown(e:any, foo:any) {
            
            foo(e.target)
        }
   
    return (
        <div  className={style.task}>
            <span  className={style.task__titel}>{listName}</span>
            <ul className={style.task__list}>        
                {
                    dataList.map((data:any) => {
                        return (<TaskItems key={data.id} title={data.title}/>)
                    })
                }
                <div className={style.form__dropdown}> 
                    <button className={style.task__dropdown}></button>
                    <ul className={style.menu__dropdown}>
                        {
                            data.map((dat:any) => {
                                return (<li onClick={(e) => {clickDropdown(e, onClick)}} className={style.task__item}>{`${dat.title}`}</li>)
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