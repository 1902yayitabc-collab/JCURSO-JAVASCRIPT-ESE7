// calculadiora de presupuestos mensual
// * registra ingresos y gastos
// * calcula totales, balance
// * Determina SUPERAVIT que es el saldo de la cuenta individual de vivienda del trabajador,
//  que se utiliza para financiar la compra de una vivienda, construcción o mejora de la misma,
//  o para pagar una hipoteca relacionada con la vivienda.
//  EQUILIBRADO  y DEFICIT

// REQUISITOS FUNCIONALES
// * Crear listas  Ingresos[] y Gastos[] con objetos {concepto, monto}
// * Validar: monto debe ser numero finito > = 0
// * Calcular: totalIngresos, totalGastos, balance
// * Clasificar eStdo segun balance 
// * Mostrar reporte en consola (TABLA + RESUMEN)

"use strict"; // "use strict" es una directiva que se utiliza en JavaScript para activar el modo estricto, 
// lo que ayuda a prevenir errores comunes y mejora la seguridad del código.
//  Al usar "use strict", se aplican reglas más estrictas en la interpretación del código, 
// lo que puede ayudar a detectar errores de manera más temprana y evitar comportamientos inesperados.

/**
 * convierte a numero y valida que sea un numero finito mayor o igual a cero
 * lannza un error si la validacion falla
 */

function validarMonto(monto) {
    const numero = Number(monto); // Convierte el valor a número
    if (!Number.isFinite(numero) || numero < 0) { // si el número no es finito o es menor que cero, lanza un error
        throw new Error("Monto inválido: debe ser un número finito mayor o igual a cero");
    }
    return numero;
} 



// modelar datos de ingresos y gastos
const ingresos = [
    { concepto: "Salario", monto: 5000000 },
    { concepto: "Freelance", monto: 1500000 },
];

/**
 * lo anteriro crea una lista de ingresos 
 */

const gastos = [
    { concepto: "Alquiler", monto: 1200000 },
    { concepto: "Comida", monto: 800000 },
    { concepto: "Transporte", monto: 300000 },
];


// calcular totales

function calcularTotal(items) {
    let total = 0;
    for (const item of items) { // recorre cada item en la lista de ingresos o gastos
        total += validarMonto(item.monto); // valida cada monto antes de sumarlo al total
    }
    return total;
}

const totalIngresos = calcularTotal(ingresos);
const totalGastos = calcularTotal(gastos);
const balance = totalIngresos - totalGastos;

// clasificar estado financiero

function getEstadoFinanciero(balance) {
    if (balance > 0) {
        return "SUPERAVIT";
    } else if (balance === 0) {
        return "EQUILIBRADO";
    } else {
        return "DEFICIT";
    }
}

function recomendacion(estado) {
    switch (estado) {
        case "SUPERAVIT":
            return "¡Buen trabajo! Considera ahorrar o invertir el excedente.";
        case "EQUILIBRADO":
            return "Estás en equilibrio, pero revisa tus gastos para mejorar tu situación.";
        case "DEFICIT":
            return "Revisa tus gastos y busca formas de reducirlos o aumentar tus ingresos.";
        default:
            return "";
    }
}

// mostrar reporte en consola

console.table(ingresos);
console.table(gastos);

console.group ("Resumen Financiero");
console.log(`Total Ingresos: ${totalIngresos}`);
console.log(`Total Gastos: ${totalGastos}`);
console.log(`Balance: ${balance}`);
console.log(`Estado Financiero: ${getEstadoFinanciero(balance)}`);
console.log(`Recomendación: ${recomendacion(getEstadoFinanciero(balance))}`);
console.groupEnd();