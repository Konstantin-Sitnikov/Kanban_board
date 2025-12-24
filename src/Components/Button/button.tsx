import React, { ComponentPropsWithRef } from "react";
import  style  from "./style.module.scss"



export const Button = React.forwardRef<HTMLButtonElement, ComponentPropsWithRef<"button">>(function ({className, disabled=false, onClick, children, ...props}, ref) {
    return (
        <button className={className} disabled={disabled} ref={ref} onClick={onClick}>{children}</button>
    )
})


export const ButtonDropdown = React.forwardRef<HTMLButtonElement, ComponentPropsWithRef<"button">>(function ({onClick, ...props}, ref) {
    return (
        <button ref={ref} className={style.button__dropdown} onClick={onClick}></button>
    )
})