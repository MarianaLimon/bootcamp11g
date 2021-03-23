/******************************************************
1. Crear un script para calcular el IMC (Indice de masa corporal) de cualquier persona, y determinar la composición corporal de dicha persona bajo los siguientes criterios:
Peso inferior al normal : IMC Menos de 18.5
Normal  : IMC 18.5 – 24.9
Peso superior al normal : IMC 25.0 – 29.9
Obesidad : IMC Más de 30.0
********************************************************/

function ejercicio1() {
    var myIMC = parseFloat(prompt("Escribe tu valor de IMD del 15 al 50"));
  
    switch(true){
        // Peso Inferior
        case myIMC <= 18.5:
          alert("Tu peso es inferior al normal");
        break;
        // Peso Normal
        case myIMC >= 18.5 && myIMC <= 24.9:
          alert("Tu peso es normal");
        break;
        // Peso Superior al Normal!
        case myIMC >= 25.0 && myIMC <= 29.9:
          alert("Tu peso es superior al normal!");
        break;
        // Obesidad
        case myIMC >= 30.0:
          alert("TIENES OBESIDAD!!!");
        break;
    }
}

/******************************************************
2. Usando como referencia los siguientes datos de estaturas promedio:
            General Varón   Mujer
México      169.9   170.0   160.8   cm's
Australia   172.6   179.2   165.9   cm's
Canadá      171.0   178.1   163.9   cm's
Brasil      167.3   173.6   160.9   cm's
Reino Unido 171.0   177.5   164.4   cm's
crear un script que me permita conocer si mi estatura es superior, inferior o igual al promedio dependiendo de mi país y género. Si mi país no se encuentra en la lista, indicar que no se cuenta con el dato de estatura para ese país.
********************************************************/

function ejercicio2() {

    var myCountry = prompt("Escribe tu pais de origen: \n\nMexico \nAustralia \nCanda \nBrasil \nReino Unido");
    var myHeight = parseFloat(prompt("Escribe tu altura en cm. Ejem: 164, 174, 182:"));
  
    switch(myCountry){
        // MEXICO
        case "Mexico":
          if(myHeight >= 160.9 && myHeight <= 169.9){
            alert("En Mexico: Tu estatura es promedio a este Pais.");
          }else if(myHeight >= 170.0){
            alert("En Mexico: Tu estatura es Promedio a un varon");
          }else if(myHeight <= 160.8){
            alert("En Mexico: Tu estatura es Promedio a una mujer");
          }
        break;
  
        // AUSTRALIA
        case "Australia":
          if(myHeight >= 166.0 && myHeight <= 179.3){
            alert("En Australia: Tu estatura es promedio a este Pais.");
          }else if(myHeight >= 179.2){
            alert("En Australia: Tu estatura es Promedio a un varon");
          }else if(myHeight <= 165.9){
            alert("En Australia: Tu estatura es Promedio a una mujer");
          }
        break;
  
        // CANADA
        case "Canada":
          if(myHeight >= 164.0 && myHeight <= 178.2){
            alert("En Canada: Tu estatura es promedio a este Pais.");
          }else if(myHeight >= 178.1){
            alert("En Canada: Tu estatura es Promedio a un varon");
          }else if(myHeight <= 163.9){
            alert("En Canada: Tu estatura es Promedio a una mujer");
          }
        break;
  
        // BRASIL
        case "Brasil":
          if(myHeight >= 161.0 && myHeight <= 174.7){
            alert("En Brasil: Tu estatura es promedio a este Pais.");
          }else if(myHeight >= 173.6){
            alert("En Brasil: Tu estatura es Promedio a un varon");
          }else if(myHeight <= 160.9){
            alert("En Brasil: Tu estatura es Promedio a una mujer");
          }
        break;
  
        // REINO UNIDO
        case "Reino Unido":
          if(myHeight >= 164.5 && myHeight <= 177.6){
            alert("En Reino Unido: Tu estatura es promedio a este Pais.");
          }else if(myHeight >= 177.5){
            alert("En Reino Unido: Tu estatura es Promedio a un varon");
          }else if(myHeight <= 164.4){
            alert("En Reino Unido: Tu estatura es Promedio a una mujer");
          }
        break;
  
        // OTRO PAIS
        default:
        alert("no hay datos de estatura de este pais")
        break;
    }
  }

/******************************************************
3. Tomando como referencia los siguientes datos de densidades:
Sustancia       Densidad (kg/m3)
Acero           7850
Cobre           8940
Oro             19300
Plata           10490
Diamante        3515
crear un script que me permita conocer el peso de un cubo de cualquier material (pedir al usuario la dimensión del lado del cubo y el material a consultar). Si el material no se encuentra en la lista, informar que no se cuentan con datos sobre la densidad de dicho material.
********************************************************/

function ejercicio3() {
    var lado = parseFloat(prompt("¿Cuánto mide el lado del cubo?"));
    var sustancia = prompt("¿De qué sustancia es el cubo? \n\nAcero, Cobre, Oro, Plata o Diamante");
  
    var densidad = Math.pow(parseFloat(lado), 3);
    var dAcero = densidad * 7850;
    var dCobre = densidad * 8940;
    var dOro = densidad * 19300;
    var dPlata = densidad * 10490;
    var dDiamante = densidad * 3515;
    switch(true){
        // Acero
        case sustancia == "Acero":
          alert("Tu cubo de Acero tiene una densidad de: " + dAcero);
          console.log(lado)
          console.log(densidad)
          console.log(dAcero)
        break;
        // Cobre
        case sustancia == "Cobre":
          alert("Tu cubo de Cobre tiene una densidad de: " + dCobre);
        break;
        // Oro
        case sustancia == "Oro":
          alert("Tu cubo de Oro tiene una densidad de: " + dOro);
        break;
        // Plata
        case sustancia == "Plata":
          alert("Tu cubo de Plata tiene una densidad de: " + dPlata);
        break;
        // Diamante
        case sustancia == "Diamante":
          alert("Tu cubo de Diamante tiene una densidad de: " + dDiamante);
        break;
        case sustancia != "Diamante" || "Acero" || "Cobre" || "Oro" || "Plata":
          alert("Esa sustancia no esta en la lista");
        break;
    }
}