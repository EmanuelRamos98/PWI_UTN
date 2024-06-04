//Document es una variable global de JS que representa como objeto a nuestro HTML


//DOM = document object model


//metodo que nos permite tener un elemento por su id, si lo encuentra lo retorna sino retorna null
/* const titulo = document.getElementById('titulo') //es un HTMLElement
const subtitulo = document.getElementById('subtitulo')
console.dir(titulo)
console.dir(subtitulo)

titulo.innerText = 'pepe'


const caja = document.getElementById('producto')

const producto = {
    precio: 1000,
    nombre: 'tv samsung',
    descripcion: 'lorem ipsum'
}


caja.innerHTML = `
    <h1>${producto.nombre}</h1>
    <p>${producto.descripcion}</p>
    <span>Precio: $${producto.precio}</span>
    <div>
        <input value='${producto.precio}'>
        <button>comprar</button>
    </div>
` */


//Asi se crea un elemento
/* const buttonProduct = document.createElement('button')
buttonProduct.innerText = 'comprar'
console.dir(buttonProduct)


caja.appendChild(buttonProduct) */

const usuarioHtml = document.getElementById('usuario')

const user = {
    username: 'pepesito',
    password: '******4',
    adress: 'av siempre viva',
    email: 'pepe@gmail.com'
}

usuarioHtml.innerHTML=`
    <h2>Nombre: ${user.username}<h2>
    <span>Contraseña:${user.password}<span> <br>
    <input type="text" value="${user.adress}"> <br>
    <input type="text" value="${user.email}">
`
/* 
Generar a partir del usuario el sig html

h2 username
span password
adress input (y el valor debe ser la direccion),
span input (y el valor debe ser el email)
*/
const productsContainerHTML = document.getElementById('products_container')

const productos = [
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    }
]

/* let productList = ''

for(const producto of productos){
    productList = productList+`
    <h1>${producto.nombre}</h1>
    <p>${producto.descripcion}</p>
    <span>Precio: $${producto.precio}</span>
    <div>
        <input value='${producto.precio}'>
        <button>comprar</button>
    </div>
    `
}

productsContainerHTML.innerHTML = productList
 */

const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
]
const historialObjeto = document.querySelector('.historial')
let  historialHTML = ''

for(const elemento of historial){

    historialHTML = historialHTML+ `
    <span><b>ID: ${elemento.id}</b></span>
    <h3>${elemento.nombre}</h3>
    <span>Fecha: ${elemento.fecha}</span>
    <br>
    <hr>
    `
}

historialObjeto.innerHTML = historialHTML
/* Renderizar el historial, cada elemento de historial debe seguir la sig estructura:

<div>
    <span><b>ID: #003</b></span>
    <h3>Tv samsung</h3>
    <span>Fecha: 14/05/2023</span>
    <br>
    <hr>
</div> */





