import style from './Favorites.module.css'
import CardFavorite from '../CardFavorite/CardFavorite'

//redux
import { orderCards, filterCards } from '../../redux/actions'
import { connect, useDispatch } from 'react-redux'


const Favorites =({myFavorites, onClose})=>{
    const dispatch = useDispatch()

    const handleOrder = (e)=>{
        dispatch(orderCards(e.target.value))
    }

    const handleFilter = (e)=>{
        dispatch(filterCards(e.target.value))
    }

    return (
        <div>
            <div>
                <select name="" id="" onChange={handleOrder}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendiente">Descendiente</option>
                </select>
                <select name="" id="" onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                    <option value="restart">restart</option>
                </select>
            </div>
            {
                myFavorites.map((character, index) => <CardFavorite
                key={index}
                character={character}
                />)
            }
        </div>
    )
}

const mapStateToProps =(state)=>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)