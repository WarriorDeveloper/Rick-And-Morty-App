import style from './NavBar.module.css'

//routing
import { NavLink } from "react-router-dom"

const NavBar = ({logout})=>{
    return(
        <nav>
            <button className={style.btn} ><NavLink className={style.navLink} to='/home' >Home</NavLink></button>
            <button className={style.btn} ><NavLink className={style.navLink} to='/about' >About</NavLink></button>
            <button className={style.btn} ><NavLink className={style.navLink} to='/favorites' >Favorites</NavLink></button>
            <button className={`${style.btn} ${style.navLink}`} onClick={logout} >Logout</button>
        </nav>
    )
}

export default NavBar