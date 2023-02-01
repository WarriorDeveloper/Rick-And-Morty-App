import { Link } from 'react-router-dom'
import style from './CardFavorite.module.css'



const CardFavorite = ({ character }) => {
    return (
        <div className={style.container}>
            <Link className={style.card} to={`/detail/${character.id}`}>
                <h2 className={style.info}>{character.name}</h2>
                <h2 className={style.info}>id: {character.id}</h2>
                <h2 className={style.info}>{character.species}</h2>
                <h2 className={style.info}>{character.gender}</h2>
                <img className={style.img} src={character.image} alt="" />
            </Link>
        </div>
    )
}

export default CardFavorite