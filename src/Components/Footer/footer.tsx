import React, { FunctionComponent } from "react";
import  style  from "./style.module.scss"
import { User } from "../../types";


const Footer: FunctionComponent<User> = ({name, year}): React.JSX.Element => {
    return (
        <div className={style.footer}>
            <div className={style.footer__container}>
                <span className={style.footer__text}>Active tasks: </span>
                <span className={style.footer__text}>Finished tasks: </span>

            </div>
            <span className={style.footer__text}>Kanban board by {name}, {year}</span>
        </div>
    )
}


export default Footer