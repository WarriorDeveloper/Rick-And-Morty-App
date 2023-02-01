import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO, FILTER, ORDER } from './actions-types'
import axios from 'axios'

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AGREGAR_FAVORITO: 
            axios.post('http://localhost:3001/rickandmorty/fav', {character: action.payload})
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }

        case ELIMINAR_FAVORITO:
            axios.delete(`http://localhost:3001/rickandmorty/fav/${action.payload}`)
            const newFavorites = state.myFavorites.filter(char => char.id !== action.payload)
            return {
                ...state,
                myFavorites: newFavorites,
                allCharacters: newFavorites
            }

        case FILTER:
            let newStateAllCharacters
            if (action.payload !== 'restart'){
                newStateAllCharacters = [...state.allCharacters.filter(char => char.gender === action.payload)]
            } else {
                newStateAllCharacters = [...state.allCharacters]
            }
            return {
                ...state,
                myFavorites: newStateAllCharacters
            }

        case ORDER:
            let newStateAllCharacters2
            if (action.payload === 'Ascendente'){
                newStateAllCharacters2 = [...state.allCharacters.sort((a,b)=>{return a.id-b.id})]
            } else if (action.payload === 'Descendiente'){
                newStateAllCharacters2 = [...state.allCharacters.sort((a,b)=>{return b.id-a.id})]
            }
            return {
                ...state,
                myFavorites: newStateAllCharacters2
            }

        default: return { ...state }
    }
}
export default reducer