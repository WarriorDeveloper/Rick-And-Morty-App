import perfil from '../../assets/Perfil.jpeg'
import style from './About.module.css'

const About = () => {
    return (
        <div className={style.container}>
            <img className={style.perfil} src={perfil} alt="Sebastian" />
            <div className={style.info}>
                <h1>Hola, Soy Sebastián Rodrigo!</h1>
                <p>Soy un desarrollador web full Stack en aprendizaje.</p>
                <p>Manejo HTML, CSS, JavaScript, Node JS, estos dos últimos con mayor eficacia.</p>
            </div>
        </div>
    )
}

export default About