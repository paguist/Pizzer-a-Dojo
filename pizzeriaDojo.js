var tiposCorteza = ["estilo Chicago", "lanzada a mano", "thin", "borde relleno"];
var tiposSalsa = ["tradicional", "marinara", "mexicana", "estilo NewYork"];
var tiposQuesos = ["mozzarella", "feta", "roquefort", "suizo"];
var tiposSalsas = ["champiñones", "aceitunas", "cebollas", "pepperonni", "salchicha", "choclo", "palmito"];

function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    return { tipoCorteza, tipoSalsa, quesos, salsas };
}

var pizza1 = pizzaOven(tiposCorteza[0],tiposSalsa[0], tiposQuesos[0], tiposSalsas[[3, 4]);
console.log("Pizza 1:", pizza1);

var pizza2 = pizzaOven(tiposCorteza[1], tiposSalsa[1], tiposQuesos[0,1], tiposSalsas[0, 1, 2]);
console.log("Pizza 2:", pizza2);