import  style  from "./style.module.css"
import avatar from '../../img/avatar.png';

function Header() {
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