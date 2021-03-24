
var phrase = "La mejor forma de predecir el futuro es creándolo";

/* 1- saber la cantidad de palabras */
var cantWords = phrase.split(" ").length;
console.log("La cantidad de palabras es: " + cantWords)

/* 2- saber la cantidad de "a" */
var countA = phrase.match(/[áa]/gi);
var letterA = countA.length;
console.log("La cantidad de letras 'a' es: " +  letterA)

/* 3- crear una nueva frase usando sólo los caracteres que esten en posiciones nones */
/* 4- crear una nueva frase usando sólo los caracteres que esten en posiciones pares */
var phraseLength = phrase.length;
var pares = "";
var nones = "";
for (var i = 0; i < phraseLength; i++) {
    //si el resto de i/2 es identico a 0
  if (i % 2 === 0)  {
   pares += phrase.charAt(i);
  } else {
    nones += phrase.charAt(i);
  }
}
console.log("Frase formada con pares: \n" + pares );
console.log("Frase formada con nones: \n" + nones );
