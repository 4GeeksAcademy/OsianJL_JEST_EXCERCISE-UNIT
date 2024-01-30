

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One Dollar should be 146,26 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(3.5);

    // Si 1 dollar son 146,26 yen, entonces 3.5 euros debe ser (3.5 * 146,26)
    const expected = 3.5 * (156.5/1.07);

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 146.26 dólares, entonces 3.5 euros deberían ser = (3.5 * 146.26)
})

test("One yen should be 0.0055 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromYenToPound(3.5);

    // Si 1 yen son 0.0055 pounds, entonces 3.5 euros debe ser (3.5 * 0.0055)
    const expected = 3.5 * (0.87/156.5);

    // Hago mi comparación (la prueba)
    expect(yen).toBe(expected); // 1 yen son 0.0055 pounds, entonces 3.5 yenes deberían ser = (3.5 * 0.0055)
})