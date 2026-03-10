"use strict";

/* 
CONVERSOR DE UNIDADES
Temperatura: C, F, K
Longitud: m, km, cm
Valida número finito
Valida unidades soportadas
Maneja errores sin romper el programa
*/

// NORMALIZAR UNIDADES
function normalizarUnidad(unidad) {

    if (!unidad) return "";

    const u = unidad.toString().toLowerCase();

    const mapa = {
        c: "C",
        celsius: "C",

        f: "F",
        fahrenheit: "F",

        k: "K",
        kelvin: "K",

        m: "m",
        metro: "m",
        metros: "m",

        km: "km",
        kilometro: "km",
        kilometros: "km",

        cm: "cm",
        centimetro: "cm",
        centimetros: "cm"
    };

    return mapa[u] || unidad;
}


// VALIDAR NÚMERO
function validarNumero(valor) {

    const num = Number(valor);

    if (!Number.isFinite(num)) {
        throw new Error("Valor inválido: debe ser un número");
    }

    return num;
}


// VALIDAR UNIDAD
function validarUnidad(unidad) {

    const unidadesSoportadas = ["C", "F", "K", "m", "km", "cm"];

    if (!unidadesSoportadas.includes(unidad)) {
        throw new Error("Unidad no soportada");
    }
}

// CONVERSIÓN TEMPERATURA
function convertirTemperatura(valor, from, to) {

    if (from === to) return valor;

    let celsius;

    if (from === "C") celsius = valor;
    else if (from === "F") celsius = (valor - 32) * 5 / 9;
    else if (from === "K") celsius = valor - 273.15;
    else throw new Error("Conversión de temperatura inválida");

    if (to === "C") return celsius;
    if (to === "F") return (celsius * 9 / 5) + 32;
    if (to === "K") return celsius + 273.15;

    throw new Error("Conversión de temperatura inválida");
}

// CONVERSIÓN LONGITUD
function convertirLongitud(valor, from, to) {

    if (from === to) return valor;

    let metros;

    if (from === "m") metros = valor;
    else if (from === "km") metros = valor * 1000;
    else if (from === "cm") metros = valor / 100;
    else throw new Error("Conversión de longitud inválida");

    if (to === "m") return metros;
    if (to === "km") return metros / 1000;
    if (to === "cm") return metros * 100;

    throw new Error("Conversión de longitud inválida");
}

// FUNCIÓN PRINCIPAL
function convertir(valor, from, to) {

    try {

        const numero = validarNumero(valor);

        from = normalizarUnidad(from);
        to = normalizarUnidad(to);

        validarUnidad(from);
        validarUnidad(to);

        const tempUnits = ["C", "F", "K"];
        const longUnits = ["m", "km", "cm"];

        if (tempUnits.includes(from) && tempUnits.includes(to)) {
            return convertirTemperatura(numero, from, to).toFixed(2);
        }

        if (longUnits.includes(from) && longUnits.includes(to)) {
            return convertirLongitud(numero, from, to).toFixed(2);
        }

        return "Error: No se pueden mezclar categorías diferentes";

    } catch (error) {

        return "Error: " + error.message;

    }
}

// PRUEBAS
console.log("100 C -> F =", convertir(100, "C", "F"));
console.log("32 fahrenheit -> celsius =", convertir(32, "fahrenheit", "celsius"));
console.log("1500 metros -> km =", convertir(1500, "metros", "km"));
console.log("1.2 km -> metros =", convertir(1.2, "km", "metros"));
console.log("abc C -> F =", convertir("abc", "C", "F"));
console.log("10 C -> m =", convertir(10, "C", "m"));
console.log("100 celsius -> fahrenheit =", convertir(100, "celsius", "fahrenheit"));