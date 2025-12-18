import React, { FunctionComponent, useRef, useEffect } from "react";
import  style  from "./style.module.scss"
import { Task } from "../../types";
import { createPortal } from "react-dom";


const TaskDetail: FunctionComponent<Task> = ({id, title, description}): React.JSX.Element => {
    const elRef = useRef<HTMLDivElement | null>(null);
    if (!elRef.current) {
        elRef.current = document.createElement("div");
        elRef.current.classList.add(style.taskDetail)
      }
    
    useEffect(() => {
        const modalRoot: HTMLElement | null = document.getElementById("main");
        if (modalRoot) {
            modalRoot.appendChild(elRef.current!);
        }
        
    
        return () => {modalRoot?.removeChild(elRef.current!)};
        }, []);

    return ( createPortal (
        <>
            <span className={style.footer__text}>{title}окно открыто</span>
            <span className={style.footer__text}>{description}</span>
        </>, elRef.current)
    )
}


export default TaskDetail