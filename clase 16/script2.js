/* const personajes = 
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

personajes.forEach(function(personaje){
    console.log(personaje);
})

 */

const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
        nombre: 'tv LG',
        marca: 'LG',
        id: 2,  
        precio: 2900
    },  
    {
        nombre: 'tv noblex',
        marca: 'noblex',   
        id: 3,  
        precio: 2300
    },
]

/* 
-Traer los productos que sean de precio inferior a 2950
-Traer los productos de la marca noblex
-Traer los productos que en su nombre incluyan el string 'tv'
*/

const inferior = productos.filter(function(elemento){
    return elemento.precio < 2950
})
console.log(inferior);

const noblex = productos.filter(function(elemento){
    return elemento.marca == 'noblex'
})
console.log(noblex);

const tvs = productos.filter(function(elemento){
    return elemento.nombre.toLowerCase().includes('tv'.toLocaleLowerCase())
})
console.log(tvs);

const marca = productos.find(function(elemento){
    return elemento.marca ==='samsung'
})
console.log(marca);
