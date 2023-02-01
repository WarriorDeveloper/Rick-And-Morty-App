import style from './Detail.module.css'

import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

const Detail = () => {

  const { detailId } = useParams()

  const [character, setCharacter] = useState()

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.container}>
      <div className={style.character}>
        <div className={style.info}>
          <h1>{character?.name}</h1>
          <h2> STATUS : {character?.status}</h2>
          <h2> SPECIE : {character?.species}</h2>
          <h2> GENDER : {character?.gender}</h2>
          <h2> ORIGIN : {character?.origin?.name}</h2>
        </div>
        <img className={style.image} src={character?.image} alt={character?.name} />
      </div>

      <button className={style.btnHome} ><NavLink className={style.navLink} to='/home'>Home</NavLink></button>
    </div>
  )
}

export default Detail