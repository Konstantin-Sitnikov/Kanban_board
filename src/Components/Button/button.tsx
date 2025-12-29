import React, { ComponentPropsWithRef } from "react";



export const Button = React.forwardRef<HTMLButtonElement, ComponentPropsWithRef<"button">>(function ({className, disabled=false, onClick, children, ...props}, ref) {
    return (
        <button className={className} disabled={disabled} ref={ref} onClick={onClick}>{children}</button>
    )
})
