import React, { useRef, useState, useEffect } from "react";
import  style  from "./style.module.scss"
import { getCountID } from '../LocalStorage/localstorage'
import { Button } from '../Button/button'
import styleButton from '../Button/style.module.scss'
import { FormInput, DataDropdown } from '../../types'



export const InputForm = React.forwardRef<HTMLDivElement, FormInput>(function ({list, setTask, ...props}, ref) {
    
    const [valueForm, setValueForm] = useState<string>("")
    const refButtonSumbit = useRef<HTMLButtonElement | null>(null)
    const refForm = useRef<HTMLInputElement | null>(null)
    const [countId, setCountId] = useState<number>(getCountID)


    function clickButtonSumbit() {
        setTask([...list, {id:countId, title:valueForm, description:"This task has no description"}])
        setCountId(countId + 1)
        setValueForm("")
    }


    useEffect(()=>{
        localStorage.setItem("countId", JSON.stringify(countId))
    }, [countId])

    useEffect(()=>{
    
            const buttonSumbit: HTMLButtonElement | null = refButtonSumbit.current
            if (buttonSumbit) {
                if (valueForm !== "") {
                buttonSumbit.style.display = "block"
            } else {
                buttonSumbit.style.display = "none"
            }
            }
            
        }, [valueForm])

    
        
    return (
        <div className={style.input} ref={ref}>
            <input ref={refForm} value={valueForm} onChange={event => setValueForm(event.target.value)} className={style.input__form} type="text" placeholder="Введите задачу"  />
            <Button ref={refButtonSumbit} className={styleButton.button__sumbit} onClick={clickButtonSumbit}>Submit</Button>
        </div>
    )
})



export const DropdownForm = React.forwardRef<HTMLDivElement, DataDropdown>(function ({taskList, dropdownList, setTaskList, setDropdownList, ...props}, ref) {
        const refForm = useRef<HTMLUListElement | null>(null)
        const refButton = useRef<HTMLButtonElement | null>(null)
 

        function clickButton() {
            const form:HTMLUListElement | null = refForm.current
            const button:HTMLButtonElement | null = refButton.current
        
        if (button && form) {
            if (!button.classList.contains(styleButton.button__dropdown_active)) {
            form.style.display = "flex"
            button.classList.add(styleButton.button__dropdown_active)
            form.scrollIntoView()
        } else {
            form.style.display = "none"
            button.classList.remove(styleButton.button__dropdown_active)
        }}
        }


        function clickDropdown(id:any) {
  
            setTaskList([...taskList, dropdownList.filter((item:any) => item.id === Number(id))[0]])
            setDropdownList(dropdownList.filter((item:any) => item.id !== id))
            if(dropdownList.length === 0) {
                const form: HTMLUListElement | null = refForm.current
                const button:HTMLButtonElement | null = refButton.current
            if (button && form) {
                form.style.display = "none"
                button.classList.remove(styleButton.button__dropdown_active)}
            }}



    return (<div ref={ref} className={style.form__dropdown}>
        <Button ref={refButton} className={styleButton.button__dropdown} onClick={clickButton}></Button> 
        <ul ref={refForm} className={style.menu__dropdown}>
                    
                    {
                        dropdownList.map((task:any) => {
                            return (<li key={task.id} onClick={() => {clickDropdown(task.id)}} className={style.task__item_dropdown}>
                                <span className={style.task__item_text}>{`${task.title}`}</span></li>)
                        })
                    }
        </ul>
    </div>)
}

     )
    

    
