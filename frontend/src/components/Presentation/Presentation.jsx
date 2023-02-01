import style from './Presentation.module.css'

const Presentation = ()=>{
    return(
        <div className={style.container}>
            <div className={style.presentation}>
                <h1>Bienvenido a la App de Rick And Morty</h1>
                <p>
                    Para comenzar a usar la App clickea en 'Random' o ingrese un id de Personaje y clickee en 'Agregar'
                </p>
                <p>
                    Clickee en 'About' para obtener información del desarrollador y 'Logout' para desloguearse
                </p>
            </div>
        </div>
    )
}

export default Presentation