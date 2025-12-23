import React, { ComponentPropsWithRef, useRef, useState, useEffect} from "react";
import  style  from "./style.module.scss"

interface input {
    list:any;
    setTask: any;

}

export const InputForm = React.forwardRef<HTMLDivElement, input>(function ({list, setTask, ...props}, ref) {
    
    const [valueForm, setValueForm] = useState("")
    const refButtonSumbit = useRef<HTMLButtonElement | null>(null)
    const refForm = useRef<HTMLInputElement | null>(null)
    const [countId, setCountId] = useState(0)


    function clickButtonSumbit() {
        setTask([...list, {id:countId, title:valueForm, description:"This task has no description"}])
        setCountId(countId + 1)
        setValueForm("")
    }

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
            <button ref={refButtonSumbit} className={style.button_sumbit} onClick={clickButtonSumbit}>Submit</button>
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
        if (!button.classList.contains(style.button__dropdown_active)) {
            console.log(!button.classList.contains(style.button__dropdown_active))
            form.style.display = "flex"
            button.classList.add(style.button__dropdown_active)
        } else {
            form.style.display = "none"
            button.classList.remove(style.button__dropdown_active)
        }
        }


        function clickDropdown(e:any) {
            let id = Number(e.target.dataset.id)
            console.log(dropdownList.filter((item:any) => item.id === id))
            setTaskList([...taskList, dropdownList.filter((item:any) => item.id === id)[0]])
            setDropdownList(dropdownList.filter((item:any) => item.id !== id))    
            }



    return (<div ref={ref} className={style.form__dropdown}> 
        <button ref={refButton} className={style.button__dropdown} onClick={clickButton}></button>
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
    

    
