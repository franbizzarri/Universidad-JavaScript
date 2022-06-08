//!FUNCIONES FLECHA / ARROW FUNCTIONS

//!Declaracion clásica

function miFuncion(){   
    console.log('Saludos desde mi función');
}

miFuncion(); //Llamada a la funcion miFuncion()

//!Declaracion Arrow Function
// EN LAS FUNCIONES FLECHA NO SE APLICA EL CONCEPTO DE HOISTING

let miFuncionFlecha = () => {
    console.log('Saludos desde mi función flecha');
}
miFuncionFlecha();

//Si se pasa un solo argumento a la función, se pueden omitir los parentesis. EJ:

const miFuncionFlecha2 = argumento1 => {
    console.log('Saludos desde mi función flecha 2');
}
miFuncionFlecha2();

//Y si hay una sola línea de código dentro del bloque de la funcion flecha, se pueden omitir las llaves. EJ:

let miFuncionFlecha3 = argumento1 => 'Saludos desde mi función flecha 3'; // return implicito
console.log(miFuncionFlecha3());

//Funcion Flecha que devuelve un objeto

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Perez'});      // Se usan primero parentesis y luego las llaves para poder devolver un objeto. 
console.log(regresaObjeto());

//Funcion Flecha con parámetros

const funcionConParametros = mensaje => mensaje;
console.log(funcionConParametros('Este es el mensaje pasado como parametro'));

const funcionConParametros2 = (num1, num2) => num1 + num2;
console.log(funcionConParametros2(5, 10));

const suma = (num1, num2) => {
    let resultado = num1 + num2;
    return `Resultado: ${resultado}`;
}

console.log(suma(3, 7));




