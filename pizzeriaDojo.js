var tiposCorteza = ["estilo Chicago", "lanzada a mano", "thin", "borde relleno"];
var tiposSalsa = ["tradicional", "marinara", "mexicana", "estilo NewYork"];
var tiposQuesos = ["mozzarella", "feta", "roquefort", "suizo"];
var tiposSalsas = ["champiñones", "aceitunas", "cebollas", "pepperonni", "salchicha", "choclo", "palmito"];

function pizzaOven1(tipoCorteza, tipoSalsa, quesos, salsas) {
    return { tipoCorteza, tipoSalsa, quesos, salsas };
}
var pizza1 = pizzaOven1(tiposCorteza[0],tiposSalsa[0], tiposQuesos[0], [tiposSalsas[3],tiposSalsas[4]] );
console.log("Pizza 1:", pizza1);

var pizza2 = pizzaOven1(tiposCorteza[1], tiposSalsa[1], [tiposQuesos[0],tiposQuesos[1]], [tiposSalsas[0],tiposSalsas[1],tiposSalsas[2]]);
console.log("Pizza 2:", pizza2);

function pizzaOven2() {
    var tipoCorteza = tiposCorteza[Math.floor(Math.random() * tiposCorteza.length)];
    var tipoSalsa = tiposSalsa[Math.floor(Math.random() * tiposSalsa.length)];
    var quesos = [tiposQuesos[Math.floor(Math.random() * tiposQuesos.length)]];
    var salsas = [tiposSalsas[Math.floor(Math.random() * tiposSalsas.length)]];
    return { tipoCorteza, tipoSalsa, tiposQuesos, tiposSalsas };
}

var pizza3 = pizzaOven2();
console.log("Pizza 3:", pizza3);


var pizza4 = pizzaOven2();
console.log("Pizza 4:", pizza3);
