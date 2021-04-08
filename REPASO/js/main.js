/* Realizar una función que reciba como parametro el nombre completo de un koder y retorne sus iniciales. Ejemplo:
Input: 'Fernanda Palacios Vera'
 Output: F. P. V.  */

 function getInitials(name) {
    const nameSplitted = name.split(" ")
    console.log(nameSplitted)
        let initials = ''
        nameSplitted.forEach((word) => {
            //console.log(word.charAt(0))
            initials += word.charAt(0) + '. ' 
        })
        console.log(initials)
        return initials
        
 }
 getInitials("Mariana Lizzeth Limon Granados")


/* Realizar una función que reciba n parametros de tipo string y validar por cada string cuantas vocales tiene y retornar el resultado en un objeto. Ejemplo:
Input:
   string1: 'Hola Mundo'
   string2: 'Soy fullsctack',
   .
   .
   .
Output: 
   {
     HolaMundo: 4,
     fullsctack: 3
   }
*/

function getQuantityVowels(...string){
    console.log(string)
    const object = {}
    string.forEach((str) => {
        const quantity = str.match(/[aeiou]/gi).length
        object[str]=quantity
    })
    return object
}

console.log(getQuantityVowels("Hola", "Hola Mariana", "Hola Limon", "Hola ueee"))


/* obtener de cada nombre la siguiente salida:

Ruben Flores R.B.
Andre Vazquez A.V.
Fernanda Palacios F.P.
George Camarillo G.C.
Ale Paez A.P.   */

const arrayNames = [
     ["Ruben", "Flores"],
     ["Andre", "Vazquez"],
     ["Fernanda", "Palacios"],
     ["Goerge", "Camarillo"],
     ["Ale", "Paez"],
     ["Shari", "Andrade"],
     ["Erick", "Trujillo"],
     ["Arce", "Gutiérrez"],
     ["Juan", "Hernandez"]
 ]

arrayNames.forEach((array) => console.log(array.join(' ') + ' ' + getInitials(array.join(' '))))








//Realizar una función que reciba como parametro el nombre completo de un koder y retorne sus iniciales. Ejemplo:
  
const initials = (nameKoder)=>{
    let separateName = nameKoder.split(" ");
    let message = separateName.reduce((accum,item) =>{
      return accum += item.charAt(0)+"."
      },"")
    return message
  }
  
  //console.log(initials("Mariana Garcia"));
  
  //Realizar una función que reciba n parametros de tipo string y validar por cada string cuantas vocales tiene y retornar el resultado en un objeto
  
  const getVowels = (...string) =>{
    let arrayObjects = [];
    let coincidencia = ""
    string.forEach(item=>{
      let object = {};
      //console.log("item: " ,item)
      coincidencia = item.match(/[aeiou]/gi)
      object['vowels'] = coincidencia;
      arrayObjects.push(object);
      //console.log("objectVowels",object)
      })
       
      return arrayObjects;
  }
  
  console.log(getVowels("Mariana Limon", "Mariana Garcia","hugo lopez"))
  
  
  
  
  
  
  
  
  /*
  const getVowels (...string) =>{
    return string.forEach(item=>{
      item.match()
    })
  }*/
  
  /* 2do Desafío */
  /*Realizar las funciones que permitan calcular el área y circuferencia de un circulo recibiendo sus parametros respectivos. Nota: Ambas funciones deben estar en sus 2 diferentes formas de declaración (arrow functions y function)
  */
  const circleArea = (radius)=>3.1416 * Math.pow(radius,2);
  
  function circleArea2(radius){
    return 3.1416 * Math.pow(radius,2);
  }
  
  const circleCircumference = (radius)=> 2 * 3.1416 * radius;
  
  function circleCircumference2(radius){
    return  2 * 3.1416 * radius;
  }
  
  
  
  /*Realizar un programa que permita al usuario seleccionar de un menu: suma, resta, multiplicación o división, el área o circunferencia de un Circulo e imprimir el resultado en consola. Nota: El programa debera ejecutarse al invocar una función.*/
  
  const getTwoValues = ()=>{
    let arrayValues = [];
    arrayValues.push(parseFloat(prompt("Introduce el primer número")));
    arrayValues.push(parseFloat(prompt("Introduce el segundo número")));
    
    return arrayValues;
  }
  
  const getRadius = () => parseFloat(prompt("Introduce el radio del círculo"));
  
  const addition =(numberOne, numberTwo)=>numberOne + numberTwo;
  
  const subtraction = (numberOne, numberTwo)=>numberOne - numberTwo;
  
  const multiplication= (numberOne, numberTwo)=>numberOne * numberTwo;
  
  const division = (numberOne, numberTwo)=>operation = numberOne / numberTwo;
  
  const menu = ()=>{
    let selectedOption = parseInt(prompt("Selecciona la operación a realizar: 1. Suma 2.Resta  3.multiplicación 4.División 5.Área Circulo 6.Circunferencia Círculo"));
    let values = [];
    let value = 0;
    let result = 0;
  
    switch(selectedOption){
      case 1:
      values = getTwoValues();
      result = addition(values[0], values[1]);
      alert("El resultado es: " + result)
      break;
  
      case 2:
      values = getTwoValues();
      result = subtraction(values[0], values[1]);
      alert("El resultado es: "+ result)
      break;
  
      case 3:
      values = getTwoValues();
      result = multiplication(values[0], values[1]);
      alert("El resultado es: " + result)
      break;
  
      case 4:
      values = getTwoValues();
      result = division(values[0], values[1]);
      alert("El resultado es: " + result);
      
      break;
  
      case 5:
      value = getRadius();
      result = circleArea(value);
      alert("El resultado es: " + result);
      
      break;
  
      case 6:
      value = getRadius();
      result = circleCircumference(value);
      alert("El resultado es: " + result)
      break;
  
      default:
      alert("No es posible realizar esa operación")
      break;
    }
  }
  
  
  //menu();
  
  /*3a ronda */
  const arrayNames = [
       ["Ruben", "Flores"],
       ["Andre", "Vazquez"],
       ["Fernanda", "Palacios"],
       ["Goerge", "Camarillo"],
       ["Ale", "Paez"],
       ["Shari", "Andrade"],
       ["Erick", "Trujillo"],
       ["Arce", "Gutiérrez"],
       ["Juan", "Hernandez"]
   ]
  
   //obtener de cada nombre la siguiente salida:
   //Ruben Flores R.B.
   const newString = () =>{
      return arrayNames.map(item =>{
      let arrayNames2 = item.reduce((accum, current)=>accum + " " + current,"") 
      let arrayWithInitials = arrayNames2+" "+ initials(arrayNames2.trim());
      return arrayWithInitials.trim()
     })
     
   }
  
  //console.log(newString());
  
  arrayKoders = [
      [
          ["name", "Ruben"],
          ["lastName", "Alvarez"],
          ["generation", 1],
      ["bootcamp", "python"],
      ["score", 90]
      ],
      [
          ["name", "Andre"],
          ["lastName", "Alvarez"],
          ["generation", 1],
      ["bootcamp", "python"],
      ["score", 90]
      ],
      [
          ["name", "Ale"],
          ["lastName", "Paez"],
          ["generation", 1],
      ["bootcamp", "python"],
      ["score", 98]
      ],
      [
          ["name", "Juan Pi"],
          ["lastName", "López"],
          ["generation", 10],
      ["bootcamp", "JavaScript"],
      ["score", 95]
      ],
      [
          ["name", "Cintia"],
          ["lastName", "Gomez"],
          ["generation", 10],
      ["bootcamp", "JavaScript"],
      ["score", 85]
      ],
      [
          ["name", "Shari"],
          ["lastName", "Andrade"],
          ["generation", 10],
      ["bootcamp", "JavaScript"],
      ["score", 90]
      ],
      [
          ["name", "Arce"],
          ["lastName", "Gutierrez"],
          ["generation", 10],
      ["bootcamp", "JavaScript"],
      ["score", 90]
      ],
      [
          ["name", "JC"],
          ["lastName", "Hernandez"],
          ["generation", 10],
      ["bootcamp", "JavaScript"],
      ["score", 90]
      ],
      [
          ["name", "Erick"],
          ["lastName", "Trujillo"],
          ["generation", 10],
      ["bootcamp", "JavaScript"],
      ["score", 90]
      ]
  ];
  //Crear un array de objetos de tipo Koder que se encuentran en el array arrayKoders. quedando de la siguiente manera:
  /*newArrayKoders = [
      {
          name: "Ruben",
          lastName: "Flores",
          generation: 1,
          bootcamp: "python",
          score: 90
      },
      {
          name: "Andre",
          lastName: "Vazquez",
          generation: 1,
          bootcamp: "python",
          score: 90
      },
  ]*/
  function Koder(name, lastName, generation, bootcamp, score) {
      this.name = name;
      this.lastName = lastName;
      this.generation = generation;
      this.bootcamp = bootcamp;
      this.score = score;
  }
  
  const newArrayKoders = ()=>{
    return arrayKoders.map(arrayProperties =>{ 
      const koder = arrayProperties.reduce((object, current)=>{
        const key = current[0]
        const value = current[1]
        object[key] = value
        console.log("my object",object)
        return object
      },{})
      //console.log(koder)
      return new Koder(koder.name, koder.lastName, koder.generation, koder.bootcamp, koder.score)
    })
  }
  
  //console.log(newArrayKoders())
  
  /*
  Obtener los koders que se encuentren en el Bootcamp de Python
  Obtener los koders que se encuentren en el bootcamp de JS
  Obtener el promedio general de los todos los koders registrados
  DOM -> Pintar los koders en una tabla (utilizando los métodos para manipular el DOM) */
  
  const typeBootcamp = (nameBootcamp) => newArrayKoders().filter(item=> item.bootcamp === nameBootcamp);
  //console.log(typeBootcamp("python"));
  //console.log(typeBootcamp("JavaScript"));
  
  const averageKoders = ()=> newArrayKoders().reduce((accum, current)=>accum + current.score,0)/newArrayKoders().length
  
  //console.log(averageKoders())
  
  function printKoders (){
  
    var body = document.getElementsByTagName("body")[0];
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    // Crea las celdas
    for (var i = 0; i < arrayKoders.length; i++) {//koder
       
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < arrayKoders[i].length; j++) {//atributos
       
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(arrayKoders[i][j]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
      tblBody.appendChild(hilera);
    }
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
  
  }
  
  printKoders();