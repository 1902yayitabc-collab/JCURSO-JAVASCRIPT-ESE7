"use strict"; 

// 1 const ejemplo
const numero = 20;
console.log(numero);

// 2 let ejemplo
let edadEjemplo = 17;
edadEjemplo = 18;
console.log(edadEjemplo);

// 3 typeof ejemplo
let nombre = "maria";
console.log(typeof nombre);

// 4  if else
let nota = 3.5;

if (nota >= 3) {
    console.log("Paso la materia");
} else {
    console.log("No paso");
}

// 5 for
for (let i = 1; i <= 5; i++) {
    console.log("Numero: " + i);
}

// 6 TYPEOF objeto
const producto = { nombre: "Cuaderno" };
console.log(typeof producto);

// 7 IF - ELSE
let edadVoto = 16;

if (edadVoto >= 18) {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}


// 8 SWITCH
const dia = 2;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    default:
        console.log("Día no válido");
}

// 9 FOR contando pares
for (let i = 2; i <= 6; i += 2) {
    console.log(i);
}

// 10  FOR recorriendo arreglo
const numeros = [2, 4, 6, 8];
let total = 0;

for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
}

console.log(total);


//A. tipos de datos typeof
//string, number, boolean, null, undefiened, symbol, bigint
//no primitivos: object, array, fuction
"use strict"; //modo escritorio qque ayuda a evitar errores comunes, como variables no declaradas

const s = "hola mundo"; //string
const n = 42; // number 
const b = true;
let u; // udefined valor no asignado
const nu = null; // null valor intencionalmente vacio
const big = 9007199254740991n; // bigint para numeros enteros grandes
const sym =Symbol ("id"); // simbolo para identificadores unidos 

console.log(typeof s); // string 
console.log(typeof n); //number 
console.log(typeof b); // boolean
console.log(typeof u); // undefined
console.log(typeof nu); // object (null es un caso especial de objeto)
console.log(typeof big); // bigint
console.log(typeof sym); // symbol 

// correro cofigo usando extension code runner en vscode crtl + alt + n
// usa null cuando quieres decir no "hay valor" y udefined cuando quieres decir "valor no asignado"

//B. let vs const (y porque evitar var)

//const
// no permite reassingacion de valor, es decir, no puedes cambiar el valor de una variable daclarada con const despues de haberla asignado
// sin embargo, si el valor es un objeto o un array, puedes modificar sus propiedades o elementos 

const x = 10; 
// x = 20; // esto causara un error porqe nose puede reasignar una varible const 

const obj = { name : "alice"};
obj.name = " bod"; // esto es permitido, ya que estamos modificando una propiedad del objeto, no reasignado la variable obj

//let permite reasignacion de valor, es decir, puedes cambiar el valor de una variable declarada con let despues de haberla asignado

let y = 10;
y = 20 // esto es permitido porque let permite resigncion

// porque evitar var 
// var tiene un alcance de funcion, lo que significa que si declaras una variable con var dentro de una funcion, esa variable es accesible en toda la funcion, incluso antes de su declaracion debido al hoisting. esto puede llevar a errores dificiles de depurar

function demo() {
if(true) {
        var z = 30; // z es accesible en toda la función demo, incluso antes de esta línea
    }
    console.log(z); // Esto funcionará y mostrará 30, lo que puede ser confuso

}//llamamos demo
demo();

// usa const por  defecto
// usa let cuando necesites reasignar un valor

// C. Converion de tipos(corercion) vs conversion explicita

// coercion de tipos (conversion implicita)
// JavaScript convierte automáticamente los tipos de datos cuando es necesario, lo que puede llevar a resultados inesperados.

console.log("m"+ 3);
console.log("5"- 3);// 2 (coercion rumber)
console.log(true + 1); // boolea (true)

// conversion explicita
// puedes convertir tipos de manualmente usando funciones como number(), String(), Boolean(), etc

const input = "12.5";
const num = Number(input); // convierte el string a un numero

const number = 42;
const str = String (number); // convierte el numero a un string 

console.log(num); 12.5
console.log(str); "42"

// operadores claves 

// 1) === VS ==
// === compara tanto el valor como el tipo de datos, mientras que 
// == compara solo el valor después de realizar coercion de tipos si es necesario.

console.log(5 === "5"); // fasle (diferente tipo)
console.log(5 == "5"); // true (coercion a number)

// siempre usar  === para evitar errores de comparación debido a coercion de tipos inesperada.
// USO !== para comparar desigualdad estricta, que también compara tanto el valor como el tipo de datos.

// 2) && VS || ?? 
// && (AND lógico) devuelve el primer valor falsy o el último valor si todos son truthy

// V  V= V    V F = F   F F = F 
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

// || (OR lógico) devuelve el primer valor truthy o el último valor si todos son falsy
// V  V= V    V F = V   F F = F
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

// ?? (Nullish coalescing) devuelve el primer valor que no sea null o undefined
const a = null;

const c = "default";
console.log(a ?? c); // "default" (a es null)

// ?? es útil para proporcionar un valor predeterminado solo cuando el valor es null o undefined,
//  a diferencia de || que considera falsy (como 0, "", false) como valores que también activan el valor predeterminado.

console.log(0 || "default"); // "default" (0 es falsy)

// D. Template strings 

const ingreso = 5000000;
const gasto = 450000;
const balance = ingreso - gasto; 

const mensaje = `El balance es: ${balance}`; // Usamos ${} para insertar la expresión balance dentro de la cadena
console.log(mensaje); // Imprime: El balance es: 4550000    

console.log(`El ingreso es: ${ingreso}, el gasto es: ${gasto}, y el balance es: ${balance}`);

// f. control de flujo: if, else, switch, for, while, do while
// ejemplo if else

const edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

console.log(edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"); // operador ternario

// for loop se usa cuando sabes cuantas veces quieres repetir un bloque de codigo

for (let i = 0; i < 5; i++) {
    console.log(i);
}

const gastos = [100, 200, 300];
let totalGastos = 0;

for (let i = 0; i < gastos.length; i++) {
    totalGastos += gastos[i]; // totalGastos = totalGastos + gastos[i];
}

console.log(`Total de gastos: ${totalGastos}`);

//while se usa cuando no sabes cuantas veces quieres repetir un bloque de codigo

let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

// funciones, las funciones son bloques de codigo realizan una tarea especifica y pueden ser reutilizadas

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Alice"));

// errores y manejo basico de errores

try {
    console.log(dividir(10, 0));
} catch (error) {
    console.error("Ocurrió un error:", error.message); // manejo del error
}

// funcion dividir con try catch dentro de la funcion

function dividirConManejo(a, b) {
  try {
    // Validaciones básicas
    if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
      throw new Error("Ambos valores deben ser números válidos");
    }

    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }

    // Si todo está OK, retornamos la división
    return a / b;

  } catch (error) {
    console.error("Ocurrió un error:", error.message);
    return null; // Indica que no se pudo realizar la división
  }
}

console.log(dividirConManejo(10, 0));   // null
console.log(dividirConManejo(10, 2));   // 5
console.log(dividirConManejo("10", 2)); // null


// deouracion de funciones
// conos.table.log() es una función que se utiliza para imprimir mensajes en la consola del navegador o del entorno de desarrollo. 
// Es muy útil para depurar código y verificar el valor de variables en diferentes puntos de la ejecución.

const report= { ingreso: 5000000, gasto: 450000, balance: 4550000 };
console.table(report); // Imprime el objeto report en formato de tabla en la consola

console.group("Reporte financiero"); // Inicia un grupo en la consola
console.log(`Ingreso: ${report.ingreso}`);
console.log(`Gasto: ${report.gasto}`);
console.log(`Balance: ${report.balance}`);
console.groupEnd(); // Finaliza el grupo en la consola