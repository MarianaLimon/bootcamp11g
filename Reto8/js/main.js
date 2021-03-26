var  kodersList = [
    [
        "Fernanda",
        "Palacios Vera"
    ],
    [
        "jorge",
        "Ochoa"
    ],
    [
        "Naomi",
        "Puertos"
    ],
    [
        "Rurick",
        "Maqueo poissot"
    ]
]

let  kodersNames= [];
const createNewArray =() => {
  for(let i= 0; i<kodersList.length;i++){
        let koderName = kodersList[i]
       kodersNames.push(koderName[0] + " " + koderName[1])
        
}
return console.log(kodersNames)
}


//createNewArray()



const koderExist = (name) => {
  for(let i =0; i<kodersNames.length;i++){
    let nameSplited = kodersNames[i].split(" ")
            nameSplited[0] === name && console.log("el nombre existe")
      }

}

//koderExist("Fernanda")

/*
    -quiero conocer la cantidad de productos en el array
    -quiero conocer el costo total de todos los productos del array
    -quiero conocer la cantidad de productos de cada categoría
        (Vegetables, Cloths, Miscellaneous, Computers)
    -quiero un nuevo array para cada categoría
    -quiero un nuevo array de strings que tenga lo siguiente
        [
            "El { productName } tiene un costo de { price }"
        ]
*/



var productsList = [
    {
        name:"producto 1",
        price:12.45,
        category:"Miscellaneous"
    },
    {
        name:"producto 2",
        price:25.13,
        category:"Vegetables"
    },
    {
        name:"producto 3",
        price:45.00,
        category:"Cloths"
    },
    {
        name:"producto 4",
        price:12500.00,
        category:"Computers"
    },
    {
        name:"producto 5",
        price:15500.00,
        category:"Computers"
    },
    {
        name:"producto 6",
        price:8729.00,
        category:"Computers"
    },{
        name:"producto 7",
        price:150.00,
        category:"Cloths"
    },{
        name:"producto 8",
        price:100.00,
        category:"Miscellaneous"
    },{
        name:"producto 9",
        price:50.00,
        category:"Vegetables"
    },{
        name:"producto 10",
        price:200.00,
        category:"Cloths"
    }
]



const numProducts  = () => {
    console.log(productsList.length)
}
//numProducts()


const costoTotal  =() =>{
  let count = 0;
  for(let i =0;i<productsList.length;i++){
    count += productsList[i].price
  }
  return count
}
//costoTotal()


const productosPorcatergorias = () => {
  let arrCategories =[]
  let veg=0 ,
      cl = 0,
      mis = 0,
      com = 0;

    for(let i =0;i<productsList.length;i++){
        arrCategories.push(productsList[i].category)
            switch (productsList[i].category){

            case "Vegetables":
              veg++
            break;

            case  "Cloths": 
                cl++
            break;
            case  "Miscellaneous": 
                mis++
            break;
            case  "Computers": 
                com++
            break;

            }


    
    }
    return  `La categoria Vegetables tiene : ${veg} productos \nLa categoria Cloths tiene : ${cl} productos \nLa categoria Miscellaneous tiene : ${mis} productos \nLa categoria Computers tiene : ${com} productos`
}
//productosPorcatergorias()


const newArrayCat = () => {
  let arrCategories =[]
let arrveg=[] ,
      arrcl = [],
      arrmis = [],
      arrcom = [];

for(let i = 0; i<productsList.length;i++){
   arrCategories.push(productsList[i].category)

  switch (productsList[i].category){

            case "Vegetables":
              arrveg.push(productsList[i])

            break;

            case  "Cloths": 
              arrcl.push(productsList[i])

            break;
            case  "Miscellaneous": 
            arrmis.push(productsList[i])
            break;
            case  "Computers": 
            arrcom.push(productsList[i])
            break;

            }

}
 console.log( arrveg ,arrcl,arrmis,arrcom)
}

newArrayCat()


const newlist = () => {
   let arrayStr = [];

   for(let i = 0;i<productsList.length;i++){
      arrayStr.push(" El nombre del producto es: " + productsList[i].name + " " + "tiene un costo de: " + productsList[i].price)
   }
  return arrayStr
}

//newlist()