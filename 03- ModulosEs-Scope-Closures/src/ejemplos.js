// 1️⃣ Scope global
const ciudad = "Bogotá";

function mostrarCiudad() {
    console.log(ciudad); // acceso global
}
mostrarCiudad();


// 2️⃣ Scope de función
function saludar() {
    const mensaje = "Hola";
    console.log(mensaje);
}
saludar();
// console.log(mensaje); 
// error


// 3️⃣ Scope de bloque
if (true) {
    let edad = 17;
    console.log(edad);
}
// console.log(edad);  error


// 4️⃣ Shadowing
const nombre = "Mariana";

function mostrarNombre() {
    const nombre = "Ana";
    console.log(nombre); // Ana
}
mostrarNombre();
console.log(nombre); // Mariana


// 5️⃣ Hoisting con función
saludo();

function saludo() {
    console.log("Hola desde hoisting");
}


// 6️⃣ Hoisting con var
console.log(numero); // undefined
var numero = 10;


// 7️⃣ let y const NO hacen hoisting usable
// console.log(x);  error
let x = 5;


// 8️⃣ Closure básico
function crearSaludo(nombre) {
    return function() {
        console.log("Hola " + nombre);
    }
}

const saludarSara = crearSaludo("Sara");
saludarSara();


// 9️⃣ Closure contador
function crearContador() {
    let contador = 0;

    return function() {
        contador++;
        return contador;
    }
}

const contar = crearContador();
console.log(contar());
console.log(contar());
console.log(contar());


// 🔟 Mezcla de scopes
const precio = 100;

function calcular() {
    const precio = 200; // shadowing

    if (true) {
        let descuento = 50;
        console.log(precio - descuento); // 150
    }

    // console.log(descuento); // error
}

calcular();
console.log(precio); // 100