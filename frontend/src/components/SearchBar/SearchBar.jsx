import style from './SearchBar.module.css'

import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function SearchBar({ onSearch }) {
   const location = useLocation()

   const [character, setCharacter] = useState('')

   const handleChangeInput = (e) => {
      setCharacter(e.target.value)
   }

   const handleRandom = () => {
      // alert(Math.floor(Math.random()*826))
      onSearch(Math.floor(Math.random() * 826))
   }

   const handleAgregar = ()=>{
      onSearch(character)
      setCharacter('')
   }

   if (!location.pathname.includes('detail') && 
       !location.pathname.includes('about')  &&
       !location.pathname.includes('favorites')
      ) {
      return (
         <div className={style.container}>
            <input value={character} className={style.inputSearch} onChange={handleChangeInput} type='search' />
            <button className={style.btnAdd} onClick={handleAgregar}>Agregar</button>
            <button className={`${style.btnAdd} ${style.btnRandom}`} onClick={handleRandom}>RANDOM</button>
         </div>
      );
   }
}

{/* <input value={character} className={style.inputSearch} onChange={handleChangeInput} type='search' /> */ }