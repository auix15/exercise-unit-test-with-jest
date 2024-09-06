//Tasas de conversion
let oneEuroIs = {
    "USD": 1.07,
    "JPY": 156.5,
    "GBP": 0.87,

}




// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a euros
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    //Convertimos a Yen
    let valueInYen = valueInEuro * oneEuroIs.JPY;

    // Retornamos el valor en Yen
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a euros
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    //Convertimos a Pound
    let valueInPound = valueInEuro * oneEuroIs.GBP;

    // Retornamos el valor en Poun
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
