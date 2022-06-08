//! FUNCIONES DE TIPO CALLBACK: Son funciones que se pasan como argumento a otra funcion.

const miFuncion1 = () => console.log('Funcion 1');

const miFuncion2 = () => console.log('Funcion 2');


miFuncion1();
miFuncion2();

const imprimir = (mensaje) => console.log(mensaje);

const sumar = (num1, num2, cb) => {
    let resultado = num1 + num2;
    cb(`Resultado: ${resultado}`);
}

sumar(5, 3, imprimir); //SE PASA LA FUNCION IMPRIMIR COMO PARAMETRO DENTRO DE LA FUNCION SUMAR PARA IMPRIMIR 

//!Llamadas asincronas con uso de la funcion setTimeout()

const miFuncionCallback = () => console.log('Saludo asíncrono despues de 3 segundos.');

setTimeout(miFuncionCallback, 3000); //El tiempo se define en milisegundos, por lo tanto, se ejecutara despues de 3 segundos.

setTimeout(function(){console.log('Saludo asincrono despues de 4 segundos')}, 4000);

setTimeout(() => console.log('Saludo asincrono despues de 5 segundos'), 5000);

//! Llamadas asincronas con uso de la funcion setInterval()

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`);
}

//setInterval(reloj, 1000);