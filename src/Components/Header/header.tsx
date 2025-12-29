
import React, { FunctionComponent, useRef } from "react";
import  style  from "./style.module.scss"
import { User } from "../../types";
import defaultAvatar from "../../img/defaultAvatar.png"


const Header: FunctionComponent<User> = ({avatar}): React.JSX.Element => {
  if(!avatar) {
      avatar = defaultAvatar
  }

  const refDropdownMenu = useRef<HTMLUListElement | null>(null)
  const refAvatar = useRef<HTMLDivElement | null>(null)

  function clickAvatar() {
    const menu:HTMLUListElement | null = refDropdownMenu.current
    const avatar:HTMLDivElement | null = refAvatar.current
    if(menu && avatar) {
      console.log(menu.classList.contains(style.header__containerAvatar_active))
      if(!avatar.classList.contains(style.header__containerAvatar_active)) {
        avatar.classList.add(style.header__containerAvatar_active)
        menu.style.display = "flex"
      } else {
        avatar.classList.remove(style.header__containerAvatar_active)
        menu.style.display = "none"
      }
    }
  }
  return (
    <div className={style.header}>
        <span className={style.header__logo}>Awesome Kanban Board</span>
        <div ref={refAvatar} className={style.header__containerAvatar} onClick={clickAvatar}>
            <img className={style.header__avatar} src={avatar} alt="avatar"></img>
            <ul ref={refDropdownMenu} className={style.dropdownMenu}>
              <div className={style.treangle}></div>
              <li className={style.dropdownMenu__item}>Profile</li>
              <li className={style.dropdownMenu__item}>Log Out</li>
            </ul> 
        </div>
    </div>
  );
}


export default Header