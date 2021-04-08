/* Dado un string de dos palabras realizar una función que devuelva la palabra más larga 
input: 'Programación Javascript'
Output: 'Programación */

const getLongestWord = (input) => {
    let word = input.split(' ')
    let longestWorrd = ""
    for (let i = 0; i < word.length; i++){
        if (word[i].length > longestWorrd.length){
            longestWorrd = word[i]
        }
    }
    console.log(longestWorrd)
    return longestWorrd
}
getLongestWord( "Como nos llamariamos todos" )

/* Crear un programa que permita detectar si una frase finaliza con punto. Dicho programa debe estar encapsulada en una función y recibir el o los parametros necesarios.
frase: 'Hola soy una desarrollador FullStack.'
Output: 'Finalizó en punto'
frase: 'Hola soy una desarrollador FullStack'
Output: 'No finalizó en punto D:'  */

const getPunto = (phrase) => {
    phrase.endsWith(".") ? conssole.log("Finalizó en punto") : console.log("No finalizó en punto D:") 
}
getPunto("Hola soy una desarrollador FullStack.")


/* Crear un programa que permita al usuario retornar el numero de coincidencias de una palabra en una frase que el mismo usuario ingrese.
input:
palabra a buscar: 'Hola'
frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D' */

//https://gist.github.com/EveFer/83cda4fe00c6296ba71bb9de10104de4