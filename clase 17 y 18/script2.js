/* FUNCIONES DE VALIDACION */
function validarEmail(email){
    return  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password){
    return ( Boolean(password) && password.length > 6 && password != password.toLowerCase())
}
function validarOperacion(operador){
    return operador =='+' || operador == '-'
}
function validarDatos(numeros){
    return numeros == Number(numeros)
}

/* VERSION CORTA */
function obtenerDato (data){
    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
    return dato
}
/* UTILIZAMOS UN DICCIONARIO */

const DATOS = {
    EMAIL: {
        mensaje: "Bienvenido, por favor ingrese su email: ",
        error: "Error, por favor ingrese un email valido: ",
        validacion: validarEmail
    },
    PASSWORD: {
        mensaje: "Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ",
        error: "Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ", 
        validacion: validarPassword
    }
}

function login() {
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return { email: email, password: password}
}
login()
