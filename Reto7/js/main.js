/* Crear una funcion que pida al usuario el umero de koders a registrar 

-tantas veces como koders se desean registrar:
    -pedir nombre del koder
    -pedir el apellido del koder
    -Imprimir el nombre completo del koder
*/

function Koders(){
    let numKoders = parseInt(prompt("¿Cuantos koders desea registrar?"))

    for(let i = 0; i < numKoders; i++){
        let nameKoder = prompt("Ingrese el nombre del koder") 
        let lastNameKoder = prompt("Ingresa el apellid del koder")

        console.log(nameKoder + " " + lastNameKoder)
    }
}

Koders();