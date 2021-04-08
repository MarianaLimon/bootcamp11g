/* Usando la frase "La mejor forma de predecir el futuro es creándolo" lograr los siguientes resultados: */

var phrase = "La mejor forma de predecir el futuro es creándolo";
console.log("Frase Original: \n" + phrase)

/* 1.- Mostrar la misma frase en snake_case */
var snakeCase = phrase.replace(/ /g, "_");
console.log("snake_case: \n" + snakeCase)

/* 2.- Mostrar la misma frase en kebab-case */
var kebabCase = phrase.replace(/ /g, "-");
console.log("kebab_case: \n" + kebabCase)

/* 3.- Mostrar la misma frase con todas las vocales en mayúscula */
var mayus = phrase.replace(/[áa]|[ée]|[íi]|[óo]|[úu]/gi, function (x) {
    return x.toUpperCase();
  });
console.log("Vocales mayusculas: \n" + mayus)

/* 4.- Mostrar los primeros 10 caracteres de la frase */
var firstCaracters = phrase.substring(0, 10);
console.log("Primeros 10 caracteres de la frase: \n" + firstCaracters)

/* 5.- Mostrar los últimos 10 caracteres de la frase  */
var EndCaracters = phrase.substring(phrase.length - 10, phrase.length);
console.log("Ultimos 10 caracteres de la frase: \n" + EndCaracters)