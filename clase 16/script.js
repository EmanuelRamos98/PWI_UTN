/* const nombres = ['pepe', 'juan', 'maria']

for(let i = 0; i < nombres.length; i=i+1){
    let nombre = nombres[i]
    
    console.log('Hola '+ nombre);
}
 */

/* 
/* 
Por cada personaje mostrar el siguente mensaje por consola
'Hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} años'
Opcional:
Al finalizar el recorrido mostar por consola 'total de edades: {sumatoria de las edades de los usuarios}'
*/
let sumaEdad = 0
const personajes = 
[{
    nombre: 'Pepe',
    apellido: 'Suarez',
    edad: 40
},{
    nombre: 'Maria',
    apellido: 'Cassanova',
    edad: 20
},
{
    nombre: 'Ezequiel',
    apellido: 'Rodriguez',
    edad: 35
}]

/* for(let i = 0; i < personajes.length; i=i+1){
    const personaje = personajes[i]

    console.log('Hola mi nombre es ' + personaje.nombre +' '+ personaje.apellido+ ' y tengo '+ personaje.edad + ' años'); 
    sumaEdad = sumaEdad + personaje.edad
}
console.log('la sumatoria de las edeades es '+ sumaEdad);
 */
/* for(const personaje of personajes){
    console.log('Hola mi nombre es ' + personaje.nombre +' '+ personaje.apellido+ ' y tengo '+ personaje.edad + ' años'); 
    sumaEdad = sumaEdad + personaje.edad
}
console.log('la sumatoria de las edeades es '+ sumaEdad); */

const auto = {
    marca: 'Honda',
    modelo: 'Civic',
    patente: 'abcdff'
}
let resultado = ' '

for(let elemento in auto){
    resultado = resultado+" " + elemento +" "+ auto[elemento]
}
console.log(resultado);