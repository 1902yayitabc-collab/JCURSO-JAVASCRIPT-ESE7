// IMPORTS SOLO DE TUS UTILIDADES
import { sumArray, averageArray, groupArrayBy } from './arrays.js';
import { clamp, roundTo, random } from './math.js';
import { titleCase, slugify } from './strings.js';


// 🔢 ARRAYS
const numeros = [1, 2, 3, 4, 5];

console.log("Suma:", sumArray(numeros));
console.log("Promedio:", averageArray(numeros));

const personas = [
  { nombre: "Ana", ciudad: "Bogotá" },
  { nombre: "Luis", ciudad: "Medellín" },
  { nombre: "Pedro", ciudad: "Bogotá" }
];

console.log("Agrupados:", groupArrayBy(personas, "ciudad"));


// 🔢 MATH
console.log("Clamp:", clamp(15, 0, 10));
console.log("Redondeo:", roundTo(3.1416, 2));
console.log("Random:", random(1, 10));


// 🔤 STRINGS
console.log("Title:", titleCase("hola mundo"));
console.log("Slug:", slugify("Hola Mundo Ejemplo"));