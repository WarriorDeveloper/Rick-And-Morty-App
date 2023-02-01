/**
 * 
 * @param {{userName : string, password: string}} userData 
 */

const validate = (userData)=>{
    const regexp = /[0-9]+/i
    const errors = {}
    // USERNAME
    if (userData.userName.length === 0 || 
        userData.userName.length>35    ||
        !/\S+@\S+\.\S+/.test(userData.userName)) errors.userName = 'Nombre de Usuario invalido'

    if (userData.password.length<6 ||
        userData.password.length>10 ||
        !regexp.test(userData.password)) errors.password = 'contraseña invalida, debe tener de 6 a 10 caracteres y al menos un numero'
    
    return errors
}

export default validate

// console.log(regexp.test('sjdfnjkd2sfndf'))