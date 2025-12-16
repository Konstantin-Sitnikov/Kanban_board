import React, { ComponentPropsWithRef, useRef} from "react";
import  style  from "./style.module.scss"




export const DropdownForm = React.forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(function ({children, ...props}, ref) {
        const refForm = useRef(null)
        const refButton = useRef(null)
        
        const form:any = refForm.current
        const button:any = refButton.current

        function clickButton() {
        if (!button.classList.contains(style.button__dropdown_active)) {
            console.log(!button.classList.contains(style.button__dropdown_active))
            form.style.display = "flex"
            button.classList.add(style.button__dropdown_active)
        } else {
            form.style.display = "none"
            button.classList.remove(style.button__dropdown_active)
        }
        }



    return (<div ref={ref} className={style.form__dropdown}> 
        <button ref={refButton} className={style.button__dropdown} onClick={clickButton}></button>
        <ul ref={refForm} className={style.menu__dropdown}>
            {
            children
            }
        </ul>
    </div>)
}

     )
    

    
