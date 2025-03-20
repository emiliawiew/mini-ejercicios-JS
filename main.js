/* elcommentarion puede ser asi */
// o puede ser asi con dos barras

//variables: nombre de variable y valor de la variable

let x = 100;
let y = 200;
let z = parseInt(prompt("tenemos los valores x,y. Introduzca el valor z"));

console.log("la suma de los tres numeros es:");
console.log(x+y+z);

console.log("en una solo linea: " + (x+y+z) + "y asi funciona" + "saludos");

x = "pepito";
y = "jaimito";
z = "seguismundo";

console.log("en una solo linea: " + (x+y+z) + "y asi funciona" + "saludos");

alert(("la suma de los numeros es" + (x+y+z)));

const PI = 3.1416;
let radio = 5;
let peri = 2 * PI * radio
document.write("el permietro de un circulo con radio¨)



// 1 ejercicio

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));

let resta = num1 - num2;

console.log("El resultado de la resta es: " + resta);

document.write("El resultado de la resta es: " + resta + "<br>");



// 2 ejercicio

let nombre = prompt("Introduce tu nombre:");
let localidad = prompt("Introduce la localidad donde vives:");
let hobby = prompt("Introduce tu hobby:");

console.log(`Te llamas ${nombre}, vives en ${localidad}, y te gusta ${hobby}.`);

document.write(`Te llamas ${nombre}, vives en ${localidad}, y te gusta ${hobby}.`);



// 3 ejercicio

let radio = parseFloat(prompt("Introduce el radio del círculo:"));

const PI = 3.1416;

let area = PI * Math.pow(radio, 2);

console.log(`El área del círculo con radio ${radio} es: ${area}`);

document.write(`El área del círculo con radio ${radio} es: ${area}<br>`);