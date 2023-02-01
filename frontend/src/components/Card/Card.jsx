import style from './Card.module.css'
import { useState, useEffect } from 'react'

//routing
import { Link } from 'react-router-dom'

//redux
import { agregarFavorito, eliminarFavorito } from '../../redux/actions'
import { connect } from 'react-redux'

function Card({ character, onClose, agregarFavorito, eliminarFavorito, myFavorites }) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         eliminarFavorito(character.id)
      } else {
         setIsFav(true)
         agregarFavorito(character)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (

      <div className={style.container}>
         <button className={style.btnClose} onClick={() => { onClose(character.id) }}>X</button>
         {
            isFav ? (
               <button className={style.btnClose} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.btnClose} onClick={handleFavorite}>🤍</button>
            )
         }
         <Link className={style.card} to={`/detail/${character.id}`}>
            <h2 className={style.info}>{character.name}</h2>
            <h2 className={style.info}>id: {character.id}</h2>
            <h2 className={style.info}>{character.species}</h2>
            <h2 className={style.info}>{character.gender}</h2>
            <img className={style.img} src={character.image} alt="" />
         </Link>
      </div>

   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      agregarFavorito: (char) => dispatch(agregarFavorito(char)),
      eliminarFavorito: (id) => dispatch(eliminarFavorito(id))
   }
}

const mapStateToProps = (state)=>{
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)