
/* for(let i=1; i<=10; i=i+1){
    alert('hola mundo '+ i)
} */

/* 
let sumatoria = 0
for(let i = 1; i<=3; i=i+1){
    let numero = prompt('ingrese numero')
    while(!numero || isNaN(numero)){
        numero = prompt('Error de dato ingrese un numero')
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero
}
alert('La suma total: '+ sumatoria)
 */


/* function calcularIva(precio){
    return (0.21*precio)
}
console.log('el iva es '+ calcularIva(200000));

 */
/* 
calcularMinutos(horas) => cantidad de minutos
calcularMinutos(1) => 60 
*/
/* 
obtenerNumero()
Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero
Sino debera volver a solicitarlo
Cuando termine de validar se retornara el numero
*/

function obtenerNumero(){
    let num = prompt('ingrese un numero')
    while(!num || isNaN(num)){
        num = prompt('ERROR. Ingrese un numero')
    }
    return num
}
let numeroX = obtenerNumero()
alert(numeroX)