import React, { FunctionComponent } from "react";
import  style  from "./style.module.scss"
import { DataFooter } from "../../types";


const Footer: FunctionComponent<DataFooter> = ({name, year, activeTasks, finishedTasks}): React.JSX.Element => {
    return (
        <div className={style.footer}>
            <div className={style.footer__container}>
                <span className={style.footer__text}>Active tasks: {activeTasks}</span>
                <span className={style.footer__text}>Finished tasks: {finishedTasks}</span>

            </div>
            <span className={style.footer__text}>Kanban board by {name}, {year}</span>
        </div>
    )
}


export default Footer