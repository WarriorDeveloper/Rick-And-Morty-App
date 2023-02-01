import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards.jsx'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
// import characters, { Rick } from './data.js'

//redux
import { connect } from 'react-redux'
import { eliminarFavorito } from './redux/actions'

//estado
import { useState, useEffect } from 'react'

//router
import { Routes, Route, useNavigate } from 'react-router-dom'

//simulacion de login
const userName = 'sebrocp.2002@gmail.com'
const password = '1password'

function App({eliminarFavorito}) {

  const [access, setAccess] = useState(false)
  const navigate = useNavigate()

  const login = (userData)=>{
    if (userData.userName === userName &&
        userData.password === password){
          setAccess(true)
          navigate('/home')
        } else return true
  }

  const logout = ()=>{
    setAccess(false)
    navigate('/')
  }

  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    // http://localhost:3001/rickandmorty/character/
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let repetido = false
          characters.forEach(char => {
            if (char.id === data.id) repetido = true
          })
          if (!repetido) setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    // console.log(character.name)
    // console.log(character.gender)
    // console.log(character.species)

    setCharacters(characters.filter(character => character.id !== id))
    eliminarFavorito(id)
  }

  useEffect(()=>{
    !access && navigate('/')
  }, [access])

  return (
    <div className='App'> {/*style={{ padding: '25px' }}*/}

      <div>
        <Nav onSearch={onSearch} logout={logout} />
      </div>
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards
          characters={characters}
          onClose={onClose}
        />} />
        <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
        <Route path='/:e' element={<Error/>} />
      </Routes>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    eliminarFavorito: (id)=>dispatch(eliminarFavorito(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
