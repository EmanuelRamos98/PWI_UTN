const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]

function eliminarNombre(list, nombre){
    return list.splice(list.indexOf(nombre), 1)
}

eliminarNombre(nombres, 'pedro')
eliminarNombre(nombres, 'pepe')
console.log(nombres);