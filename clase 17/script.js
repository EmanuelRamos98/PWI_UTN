/* LOGIN */
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

function obtenerEmail(){
    let usuario = prompt('Ingrese un email')
    while( !validarEmail(usuario)){
        alert('ERROR')
        usuario = prompt('Ingrese un email valido')
    }
    return usuario
}

function obterPass(){
    let password = prompt('Ingrese una contrasena con 1 Mayuscula y al menos 6 caracteres')
    while(!validarPassword(password)){
        alert('Error')
        password = prompt('Intente denuevo')
    }
    return password
}


function login(){
    let email = obtenerEmail()
    let password = obterPass()
    return {email: email, password: password}
}
login();



/* CALCULADORA */

function obtenerOperacion(){
    let calculo = prompt('Ingrese que operacion va a realizar')
    while(!validarOperacion(calculo)){
        alert('ERROR')
        calculo = prompt('Ingrese que operacion va a realizar')
    }
    return calculo
}

function numeros(){
    let num = prompt('Ingrese un valor') 
    while(!validarDatos(num)){
        alert('ERROR Ingrese un valor numerico')
        num = prompt('Ingrese un valor')
    }
    num = Number(num)
    return num
}

let operador = obtenerOperacion()
let num1 = numeros()
let num2 = numeros()


function calcular(operador, num1, num2){
    if(operador === '-'){
        let resultado = num1 - num2
        alert('El resultado es: '+resultado)
        return resultado
    }else if(operador === '+'){
        let resultado = num1 + num2
        alert('El resultado es: '+resultado)
        return resultado
    }
}
let resultado = calcular(operador, num1, num2)

let historial = [{
    accion: 'CALCULAR',
    operacion: operador,
    a: num1,
    b: num2,
    resultado: resultado
}]


/* HISTORIAL */
function renderizarHistorial (historialRecibido){

    let listaStrHistorial = ''
    for (const item of historialRecibido){

        listaStrHistorial = listaStrHistorial + `
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a}, ${item.b}
        Resultado: ${item.resultado}
        `
    }
    return listaStrHistorial
    
} 

function agregarElemento(elemento){
    const historial = obtenerHistorial()
    historial.push(elemento)
    const stringObj = JSON.stringify(historial)
    localStorage.setItem('historial', stringObj)
}
function obtenerHistorial(){
    let historialString = localStorage.getItem('historial')
    return JSON.parse(historialString)
}
if(obtenerHistorial()=== null){
    localStorage.setItem('historial', JSON.stringify([]))
}

let elHistorial = obtenerHistorial(agregarElemento(renderizarHistorial(historial)))

function mostrarElHistorial(dato){
    return document.write(dato)
}
mostrarElHistorial(elHistorial)





