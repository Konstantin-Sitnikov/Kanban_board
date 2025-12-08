import React, { FunctionComponent } from "react";
import  style  from "./style.module.css"
import { User } from "../../types";


const Footer: FunctionComponent<User> = ({name, year}): React.JSX.Element => {
    return (
        <div>
            <div>
                <span>Active tasks: </span>
                <span>Finished tasks: </span>

            </div>
            <span>Kanban board by {name}, {year}</span>
        </div>
    )
}


export default Footer