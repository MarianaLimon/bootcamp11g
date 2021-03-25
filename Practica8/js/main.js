/*  -pedir al usuario la cantidad de koders a guardar
    -pedir nombre y apellido de cada koder
    -guardar cada koder en un array 
    -imprimir cada uno de los koders  */

var arrayKoders = []

function Koders(){
    let numKoders = parseInt(prompt("¿Cuantos koders desea registrar?"))
    
    for(let i = 0; i < numKoders; i++){
        let nameKoder = prompt("Ingrese el nombre del koder") 
        let lastNameKoder = prompt("Ingresa el apellido del koder")
        var koder =(`${nameKoder} ${lastNameKoder}`)  
        // guardar cada koder en un array
        arrayKoders.push(koder)
    }
    
    console.log(arrayKoders)
    //imprimir cada uno de los koders
    var kodesList = arrayKoders.join("\n");
    console.log(`Lista de koders:\n${kodesList}`)

    editKoders();
}
Koders();

/* permitir guardar koders adicionales */
/* permitir borrar un koder aleatorio de la lista */

function editKoders(){
    let addKoder = prompt("¿Desea agregar o borrar algún koder?");
    (addKoder === "agregar" ? Koders() : dropKoders(addKoder))
}

function dropKoders(action){
    if (action === "borrar"){
        let dropKoder = Math.floor(Math.random()*(arrayKoders.length)+1);
        arrayKoders.splice(dropKoder,1)
        let kodesList = arrayKoders.join("\n")
        console.log(`Se elimino un koder\nLa nueva lista es:\n${kodesList}`)
    } else{
        alert("Opción no valida");
    }
    editKoders()
}
