import SearchBar from "../SearchBar/SearchBar"
import NavBar from "../NavBar/NavBar"

import style from './Nav.module.css'

import { useLocation } from "react-router-dom"

const Nav = ({onSearch, logout})=>{

    const location = useLocation()

    // const handleRandom = ()=>{
    //     // alert(Math.floor(Math.random()*826))
    //     onSearch(Math.floor(Math.random()*826))
    // }

    if (location.pathname !== '/') {
        return(
            <div className={style.container}>
    
                <NavBar logout={logout}/>
    
                <SearchBar onSearch={onSearch}/>
    
                {/* <button className={style.btnRandom} onClick={handleRandom}>RANDOM</button> */}
            </div>
        )
    }
}

export default Nav