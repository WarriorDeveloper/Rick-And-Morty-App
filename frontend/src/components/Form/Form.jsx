import style from './Form.module.css'

import { useState } from "react"
import validate from "./validation"

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        userName: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        userName: '',
        password: ''
    })

    const [mensajeLoginFallido, setMensajeLoginFallido] = useState(false)
    const [mensajeCompletarCampos, setMensajeCompletarCampos] = useState(false)

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })

        setErrors(validate({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = () => {
        setUserData({
            ...userData,
            userName: '',
            password: ''
        })
        if (!errors.userName && !errors.password) {
            setMensajeCompletarCampos(false)
            setMensajeLoginFallido(login(userData))
        } else {
            setMensajeCompletarCampos(true)
            setMensajeLoginFallido(false)
        }
    }

    return (
        <div className={style.container}>
            <div className={style.form}>
                <h1 className={style.formTitle}>Rick And Morty App</h1>
                <div className={style.formContent} >
                    <label className={style.formTitleInput} htmlFor="userName">UserName: </label>
                    <input
                        type="text"
                        name="userName"
                        value={userData.userName}
                        onChange={handleInputChange}
                        className={style.formInput}
                    />
                    {
                        errors.userName ? <div className={style.formErrors} >{errors.userName}</div> : ''
                    }
                </div>
                <div className={style.formContent} >
                    <label className={style.formTitleInput} htmlFor="password">Password: </label>
                    <input
                        type="text"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        className={style.formInput}
                    />
                    {
                        errors.password ? <div className={style.formErrors} >{errors.password}</div> : ''
                    }
                </div>

                <div className={style.formContent}>
                    <button type="submit" onClick={handleSubmit} className={style.btnLogin}>LOGIN</button>
                    {
                        mensajeCompletarCampos ? <div className={style.formErrors} >Complete todos los campos correctamente</div> : ''
                    }
                    {
                        mensajeLoginFallido ? <div className={style.formErrors} >login fallido</div> : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Form