import React, { FunctionComponent } from "react";
import  style  from "./style.module.css"
import { User } from "../../types";
import defaultAvatar from "../../img/defaultAvatar.png"


const Header: FunctionComponent<User> = ({avatar}): React.JSX.Element => {
  if(!avatar) {
      avatar = defaultAvatar
  } 
  return (
    <div className={style.header}>
        <span className={style.header__logo}>Awesome Kanban Board</span>
        <div className={style.header__userMenu}>
           <img className={style.header__avatar} src={avatar} alt="avatar"></img> 
        </div>
    </div>
  );
}


export default Header