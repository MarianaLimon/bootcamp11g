// var name = "Aria" //debil tipado
// var age = 25

// age += 3 //asignacion aditiva

// console.log( age )

// name += "Nissett" 

// console.log( name )

// name -= "Nissett" 

// console.log( name ) // imprim NaN -> not a number

// console.log( 7 == 7 ) // es true xq es una igualacion de 2 numeros
// console.log( 7 == "7" ) // es true xq su valor es el mismo
// console.log( 7 === "7" ) // es false xq los caracteres no son del mismo tipo, uno es numero y el otro un string
// === odatos identicos

// console.log( 7 != "7" )
// console.log( 7 !== "7" )

// console.log( 7 < 7 )
// console.log( 7 > 7 )

// console.log( 7 <= 7 )
// console.log( 7 >= 7 )

// console.log( 7 >= "7" )


/* && */
/* || 
asignacion de corto circuito 
es la version corta de un if */

/* ! */
/* ternario
 ? : 
 condition ? result if true : result if false */


var foo;
console.log( !foo ) // TRUE estamos preguntando si es indefinido

foo = "foo"
console.log( !foo ) // FALSE como ya lo definimos nos manda ese resultado

var obj = {
    name: "Mariana"
}

console.log( !obj.name ) //manda  false xq la variable name si esta definida
console.log( !obj.lastName ) //manda true xq la variable name no esta definida

// Prompt nos permite pedir un valor al usuario
// Los valores obtenidos por el prompt se tman x string
var myName = prompt("Ingresa tu nombre") 
console.log( myName)

// Para convertir un string a number
parseInt("27")

