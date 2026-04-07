"use strict";
// ejemplos

//map

 //1 mayusculas
const nombres =  ["ana", "luis", "carlos"];
const mayus = nombres.map (nombre => nombre.toUpperCase());
console.log(mayus);
//["ANA", "LUIS" ,"CARLOS"]

//2 edades
const personas=[
    {nombre: "Ana", edad:18},
    {nombre: "Luis", edad:20}
];
const edades = personas.map(p => p.edad);
console.log(edades);
// [18,20]

//3 metros a km
const metros = [1000, 2000, 3000];
const km = metros.map(m => m / 1000);
console.log(km);
// [1,2,3]

// 4 cuadrado de un numero 
const numero = [2,4,6,8]
const cuadrado = numero.map (numero => numero *numero);
console.log (cuadrado);
// [4,16.36.64]

// 5 suma 10
const numeros = [6,15,22]
const resultados = numeros.map( numero => numero + 10)
console.log (resultados);
// [16,25,32]

//filter

// 1 numeros mayores a 10 
const num =  [5, 12, 8, 20];
const mayores = num.filter(n => n > 10);
console.log(mayores);
//[12,20]

// 2 palablras largas
const palabras = ["sol", "computador", "luz"];
const largas = palabras.filter(p => p.length > 4);
console.log(largas);
// ["computador"]

//3 persona mayor de edad
const persona = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 19 }
];
const mayor = persona.filter(p => p.edad >= 18);
console.log(mayor);
// [nombre: "Luis", edad: 19 ]

// 4 numeros pares
const numer = [1, 2, 3, 4, 5, 6];
const pares = numer.filter(n => n % 2 === 0);
console.log(pares);
// [2, 4, 6]

// 5 palabras con la letra "a"
const palabra = ["Ana", "cama", "televosor"];
const conA = palabra.filter(n => n.includes("a"));
console.log(conA);
// ["Ana", "cama"]

//reduce

// 1 sumar numeros
const nume = [1, 2, 3, 4];
const suma = nume.reduce((acum, num) => acum + num, 0);
console.log(suma);
// [10]

// 2 multiplicar 
const numerosMultiplicar = [2, 3, 4];
const resultado = numerosMultiplicar.reduce((acum, num) => acum * num, 1);
console.log(resultado);
// [24]

// 3 Contar elementos
const nombresConteo = ["Ana", "Luis", "Ana"];
const conteo = nombresConteo.reduce((acum, nombre) => {
  acum[nombre] = (acum[nombre] || 0) + 1;
  return acum;
}, {});
console.log(conteo);
// [Ana: 2, Luis: 1]

// 4 Sumar edades
const personasEdad = [
  { nombre: "Ana", edad: 18 },
  { nombre: "Luis", edad: 20 }
];
const total = personasEdad.reduce((acum, p) => acum + p.edad, 0);
console.log(total);
// [38]

// 5 número mayor
const numerosReduce = [5, 9, 3, 12];
const mayorNumero = numerosReduce.reduce((acum, num) => {
  return num > acum ? num : acum;
}, numerosReduce[0]);
console.log(mayorNumero);
// [12]