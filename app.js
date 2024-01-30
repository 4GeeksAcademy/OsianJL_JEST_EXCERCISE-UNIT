
// const sum = (a,b) => {
//     return a + b
// }

// Solo un registro en consola para nosotros
// console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
// module.exports = { sum };



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


function fromDollarToYen(dollar){
    let euro = dollar / oneEuroIs.USD;  
    let yen = euro * oneEuroIs.JPY
    return yen; 
}

function fromYenToPound(yen){
    let euro = yen / oneEuroIs.JPY; 
    let pound = euro * oneEuroIs.GBP
    return pound; 
}




function fromEuroToDollar(euro){
    let Dollar = euro * oneEuroIs.USD; 
    return Dollar; 
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }