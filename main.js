//Json para almacenar datos

let lista_informacionA = {};
let lista_informacionB = [];
let nombre = prompt("ingrese su nombre");
lista_informacionA.NOMBRE = nombre;
lista_informacionB["NOMBRE"] = nombre;

let apellido = prompt("ingrese su apellido");
lista_informacionA.APELLIDO = apellido;
lista_informacionB["APELLIDO"] = apellido;

console.log(lista_informacionA);
console.log(lista_informacionB);