/* 

Calcular el valor + iva de los siguientes costos:
245.56
97.45
23.15
54.96
12.16

*/
/*
const IVA = 1.16

var costo1 = 245.56
var costo1conIva = costo1 * IVA
console.log(costo1conIva)

var costo2 = 245.56
var costo2conIva = costo1 * IVA
console.log(costo2conIva)

 Forma de escribir una funcion 
Funciones convencionales y Funciones Flecha

Funciones convencionales:
function functionName (parametro1,parametro2){
    cuerpo de la funcion-que queremos que esta funcion relice
}
*/

function addTax ( price ){
    const IVA = 1.16
    let result = price * IVA
    console.log(result)
}

addTax( 245.56 )
addTax( 97.45 )
addTax( 23.15 )
addTax( 54.96 )
addTax( 12.16 )

var myName = "Marina Limon" /* Ambito Global = puedo acceder a ella desce cualquier funcion */

function printMyName (){
    var myAddress = "Coacalco"
    console.log(myName)
    console.log(myAddress)
    if( true ){
        console.log(myName)
        console.log(myAddress)
        var heroVar = "x"
        let unHeroVar = "y" // solo lo lee su scope
        //unHeroVar = "yx" sin la palabra reservada automaticamente es un var
    }
    console.log(heroVar)
    // console.log(unHeroVar) no esta declarada xq no llegamos a ella, ya que esta en oro scope

    printMyAddress(myAddress) /* puedo llamar una funcion dentro de otra funcion */
}

function printMyAddress( address ){
    console.log( address )
}

printMyName();

function getUserName(){
    let userName = prompt("Ingresa tu nobre")

    console.log( userName )
}

//getUserName()  en consola

/* ARRAYS -> Tipo de datos que almacena cosas, variables, datos, objetos hasta arrays*/

/*
    -Crear una función que pida al usuario el número de koders a registrar
    
    -tantas veces como koders se deseen registrar:
        -Pedir el nombre del koder
        -Pedir el apellido del koder
        -Imprimir el nombre completo del koder
*/


/*Teniendo en cuenta la siguiente lista de músicos, imprimir únicamente las inciciales de cada músico
    input Gustavo Cerati
    output G. C.
*/


let musicians = [
    "Gustavo Cerati",
    "Juan Valdivia",
    "Roy Orbison"
]

let painters = [
    "Vincent Van Gogh",
    "Diego Rivera",
    "Remedios Varo"
]

let writers = [
    "Howard Philips Lovecraft",
    "Anne Rice",
    "Isaac Asimov",
    "José Saramago"
]

/*
    -Tomar la lista
    -Tomar el primer nombre de la lista
    -divirlo en palabras
    -tomar la primer palabra
    -extraer el primer caracter
    -escribir el primer caracter
    -agregarle ". "
    -revisar si hay siguiente palabra
        si hay, 
            tomar la siguiente palabra
            extraer el primer caracter
            escribir el primer caracter
            agregarle ". "
        si no hay
            tomar el siguiente nombre en la lista
            repetir
*/


function getInitials( fullName ){
    console.log( fullName )
    let dividedName = fullName.split(" ")
    
    let initials = "";
    for( let i = 0; i < dividedName.length; i++ ){
        let word = dividedName[i]
        //console.log( dividedName[i] )
        let initial = word.charAt(0)
        //console.log( initial )
        initial += ". "
        //console.log( initial )
        initials += initial
        console.log( initials )
    }
}

function printInitials( namesArray ){
    for( let i = 0; i < namesArray.length; i++){
        getInitials( namesArray[i] )
    }
}

printInitials( musicians )
printInitials( painters )
printInitials( writers )
