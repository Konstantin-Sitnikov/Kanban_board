import React, { ComponentPropsWithRef } from "react";
import  style  from "./style.module.scss"



export const ButtonAddForm = React.forwardRef<HTMLButtonElement, ComponentPropsWithRef<"button">>(function ({onClick, children, ...props}, ref) {
    return (
        <button className={style.button} ref={ref} onClick={onClick}>{children}</button>
    )
})


export const ButtonSumbit = React.forwardRef<HTMLButtonElement, ComponentPropsWithRef<"button">>(function ({onClick, children, ...props}, ref) {
    return (
        <button className={style.button_sumbit} ref={ref} onClick={onClick}>{children}</button>
    )
})

export const ButtonDropdown = React.forwardRef<HTMLButtonElement, ComponentPropsWithRef<"button">>(function ({onClick, ...props}, ref) {
    return (
        <button ref={ref} className={style.button__dropdown} onClick={onClick}></button>
    )
})