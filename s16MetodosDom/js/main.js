/* Seleccionar elementon a traves de tagname */
//let listItems = document.getElementsByTagName("li")

/* Seleccionar elementon a traves de una clase */
//let bgSuccess = document.getElementsByClassName("bg-success")

/* Seleccionar elementon a traves de una id */
//let kodersList = document.getElementById("koders-list")

/* Seleccionar multiples elementos */
//let italicItem = document.querySelector("#koders-list .bg-success .text-italic")

//let spans = document.querySelectorAll("#koders-list li span")

/*

// LISTAS

let listItems = document.querySelectorAll("#koders-list li")

listItems.forEach( element => {
    element.classList.add("list-group-item")
    console.log( element.innerText)
    let elementText = element.innerText

    elementText.length > 4 ? element.classList.add("bg-primary") : element.classList.add("bg-secondary")
})


let notesArray = [
    {
        signature:"Español",
        note:8
    },{
        signature:"Matemáticas",
        note:9
    },{
        signature:"Inglés",
        note:8.5
    },{
        signature:"Física",
        note:7
    }
]

const addItem = ( signature, note ) => {
    let notesList = document.getElementById("notes-list")

    let noteLi = document.createElement("li")
    let noteText = document.createTextNode(`${signature}: ${note}`)
    
    noteLi.appendChild(noteText)

    noteLi.className = "list-group-item"

    note < 8 ? noteLi.classList.add("bg-warning") : noteLi.classList.add("bg-success")

    notesList.appendChild(noteLi)
}

notesArray.forEach( note => {
    addItem( note.signature, note.note )
})

const getLowerScore = () => {
    let scores = document.querySelectorAll('li.bg-warning').length;
    console.log(scores);
    return scores;
}

//element.addEventListener({event}, callback )

document.getElementById("button").addEventListener("click", () => {
    console.log(" hola ")
})


document.getElementById("button").addEventListener("click", getLowerScore )

// MI BOTON QUE DICE HOLA
document.getElementById("button").addEventListener("click", () =>{
    console.log("Hola")
})

*/


// Koders


document.getElementById("my-input").addEventListener("keyup", (event) => {
    console.log( event )
    console.log( event.target )
    let value = event.target.value
    console.log( value )
    document.getElementById("my-heading").innerText = value
})

let buttons = document.querySelectorAll( ".test-btn" )

console.log( buttons )

buttons.forEach( button => {
    console.log( button )
    button.addEventListener("click", event => {
        console.log( event.target.innerText )
        console.log( event.target.dataset )
        let customKey = event.target.dataset.customKey
        console.log( customKey )
    })
})

let koderList = []

const getKoderName = () => {
    let kodersList = document.getElementById("koders-list")
    let nameInput = document.getElementById("koder-name")
    let koderName = nameInput.value
    //console.log( koderName )
    
    koderList.push( koderName )
    
    
    while (kodersList.lastElementChild) {
        kodersList.removeChild( kodersList.lastElementChild );
    }


    console.log( koderList )
    printKodersList()
    document.getElementById("koder-name").value = ""
}

document.getElementById("save-koder").addEventListener("click", getKoderName )

const printKodersList = () => {
    koderList.forEach( koder => {
        let listItem = document.createElement("li")
        let itemText = document.createTextNode(koder)
        listItem.appendChild(itemText)

        listItem.classList.add("list-group-item")

        document.getElementById("koders-list").appendChild(listItem)
    })
}

