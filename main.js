let nombre = (prompt("Cual es tu nombre?"));
let ciudad = (prompt("Donde vives?"));
let hobby = (prompt("Cual es tu hobby?"));
document.writeln (" Bienvenido " + nombre + " ahora sé que vives en " + ciudad + " y te gusta " + hobby)
console.log (" Bienvenido " + nombre + " ahora sé que vives en " + ciudad + " y te gusta " + hobby)

let radio = Number(prompt( "Dime un número, lo usaremos como radio para calcular el área de un círculo."));
const pi = 3.1416;
let area = pi * radio * radio;
document.writeln ( "Además, el área del círculo con el radio que proporcionaste es: " + area)
console.log ("El área del círculo con el radio que proporcionaste es:: " + area)