/* IMPOTANTE 
    RESPETAR LAS MAYUSCULAS Y MINUSCULAS
*/
/* Tipos de DATOS */

/* Datos OBJETOS: Proximamente */

/* Datos PRIMITIVOS

Number => Numeros enteros.(Nan infinity)

string => textos, parrafos, nombres (Siempre entre ``, '', "" ya que estas lo definien)

boolean => valores true o false, es decir estados booleanos. Respuestas de solamente 2 valores posibles

Null => La ausencia o nulidad de un dato

Undifined => No hay un dato definido

*/


/*

EJEMPLOS (para definir que tipo de datos)

Soy un mensajero que envia una carta, llego a la casa, me atienden y me dicen que QUIEREN la carta

estado_de_respuesta: TRUE

Soy un mensajero que envia una carta, llego a la casa, me atienden y me dicen que NO quieren la carta

estado_de_respuesta: FALSE

Soy un mensajero que envia una carta, PERO ME ESTRAVIE EN CAMINO A LA CASA

estado_de_respuesta: UNDIFINED

Soy un mensajero que envia una carta, llego a la casa, PERO NO ME ATIENDEN

estado_de_respuesta: NULL

*/

/* OPERADORES ARITMETICOS */

/* Contructores
    String(dato) => transforma el dato en string
    Number(dato) => transforma el dato en numero
    Boolean(dato) => transforma el dato en boolean
*/
/* 
    "HOLA" + 1
    (
        proceso interno: "HOLA" + String(1)
        proceso interno: "HOLA" + "1" = "HOLA1"
    )

    LA VENTAJA DE JS ES QUE DE MANERA IMPLISITA CONVIERTE LOS DATOS PARA PODER CONCATENARLOS
    LOS DEMAS LENGUAJES NO LO HACEN Y LO DEBEMOS HACER NOSOTROS, ES DECIR, SIEMPRE QUE QUIERA OPERAR TENGO QUE TENER LOS MISMOS DATOS

*/
/* 
CONCATENACION: SIEMPRE DEVUELVE STRINGS
    La concatenacion ocurre cuando uno de los valores tiene tipo STRING
+ => Concatenacion
Se llama concatenacion a cualquier suma que tenga aunque sea un solo string
Con que uno solo sea un string ya sirve para concatenar, es decir, si hay un numero lo transforma a string

IMPORTANTE: LAS CONCATENACIONES,CUANDO SE RESTAN EN LOS CASOS DE QUE DENTRO DEL STRING EL VALOR ES UN NUMERO SE RESTAN COMO SI FUERAN UNA OPERACION NORMAL
*/
/* 

SIEMPRE DEVUELVE NUMEROS
+ => Suma

    1 + 1 = 2 (Numero)
    1 + true = 2 (Numero, pasa a true en numero. Su formato vale 1)

= => Resta
* => Multiplicacion
/ => Divicion
% => Resto de divicion

*/

/* Falsy o Truthy */
/* Si un dato al pasarlo por Booleand(dato) me da false, es un valor FALSY, si me da true es un valor TRUTHY */
/* 
    TODOS ESTOS VALORES SON FALSE, sin necesariamente ser false
        0
        ""
        false
        null
        undifiend
        NaN
    Los falsy, son datos que cuando se fuerzan en booleand se transforman en false
*/

/* FUNCIONES NATIVAS
    typof() tipo de dato
    isNan() devuelve un booleano dependiendo de si es un Nan o no
*/

/* COMPARADORES */

/* 
    SIEMPRE DEVUELVEN BOOLEANOS

        == : es igual (COMPARA IGUALDAD EN VALOR)
        === : estricta igualdad (COMPARA IGUALDAD EN VALOR Y TIPO DE DATO)
        != : diferencia
        !== : estricta diferencia
        <
        >
        <=
        >=
*/