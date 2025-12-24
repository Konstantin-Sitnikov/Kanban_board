import React, { useRef, useState, useEffect} from "react";
import  style  from "./style.module.scss"
import { getCountID } from '../LocalStorage/localstorage'
import { Button, ButtonDropdown} from '../Button/button'
import styleButton from '../Button/style.module.scss'

interface input {
    list:any;
    setTask: any;

}

export const InputForm = React.forwardRef<HTMLDivElement, input>(function ({list, setTask, ...props}, ref) {
    
    const [valueForm, setValueForm] = useState("")
    const refButtonSumbit = useRef<HTMLButtonElement | null>(null)
    const refForm = useRef<HTMLInputElement | null>(null)
    const [countId, setCountId] = useState(getCountID)


    function clickButtonSumbit() {
        setTask([...list, {id:countId, title:valueForm, description:"This task has no description"}])
        setCountId(countId + 1)
        setValueForm("")
    }


    useEffect(()=>{
        localStorage.setItem("countId", JSON.stringify(countId))
    }, [countId])

    useEffect(()=>{
    
            const buttonSumbit:any = refButtonSumbit.current
  
            if (valueForm !== "") {
                buttonSumbit.style.display = "block"
            } else {
                buttonSumbit.style.display = "none"
            }
        }, [valueForm])

    
        
    return (
        <div className={style.input} ref={ref}>
            <input ref={refForm} value={valueForm} onChange={event => setValueForm(event.target.value)} className={style.input__form} type="text" placeholder="Введите задачу"  />
            <Button ref={refButtonSumbit} className={styleButton.button__sumbit} onClick={clickButtonSumbit}>Submit</Button>

        </div>
    )
})

interface DataDropdown {
    taskList:any;
    dropdownList:any;
    setTaskList: any;
    setDropdownList:any
}

export const DropdownForm = React.forwardRef<HTMLDivElement, DataDropdown>(function ({taskList, dropdownList, setTaskList, setDropdownList, ...props}, ref) {
        const refForm = useRef(null)
        const refButton = useRef(null)
        


        function clickButton() {
            const form:any = refForm.current
            const button:any = refButton.current

        if (!button.classList.contains(styleButton.button__dropdown_active)) {
            form.style.display = "flex"
            button.classList.add(styleButton.button__dropdown_active)
        } else {
            form.style.display = "none"
            button.classList.remove(styleButton.button__dropdown_active)
        }
        }


        function clickDropdown(e:any) {
            let id = Number(e.target.dataset.id)
            console.log(dropdownList.filter((item:any) => item.id === id))
            setTaskList([...taskList, dropdownList.filter((item:any) => item.id === id)[0]])
            setDropdownList(dropdownList.filter((item:any) => item.id !== id))    
            }



    return (<div ref={ref} className={style.form__dropdown}>
        <Button ref={refButton} className={styleButton.button__dropdown} onClick={clickButton}></Button> 
        <ul ref={refForm} className={style.menu__dropdown}>
                    
                    {
                        dropdownList.map((task:any) => {
                            return (<li key={task.id} data-id={task.id} onClick={(e) => {clickDropdown(e)}} className={style.task__item_dropdown}>{`${task.title}`}</li>)
                        })
                    }
        </ul>
    </div>)
}

     )
    

    
