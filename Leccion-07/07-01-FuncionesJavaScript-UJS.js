//! DECLARACION DE LA FUNCION
/*
function miFuncion(a,b){
    console.log(arguments.length);  //arguments.length imprime la cantidad de argumentos que tiene la funcion
    return a + b;
}
*/

//! LLAMANDO A LA FUNCION
/*
let resultado = miFuncion(2,3);
console.log(resultado);
*/
//! DECLARACION DE UNA FUNCION DE TIPO EXPRESION (SOLO PUEDE SER LLAMADA UNA UNICA VEZ)
/*
let suma = function(a, b){return a + b}; 

resultado = suma(1, 2);
console.log(resultado);
*/
//! FUNCION QUE SE LLAMA A SI MISMA - SELF INVOKING
/*
(function(a, b){
    console.log("Ejecutando la funcion: "+ (a + b));
})(3, 4);

console.log(typeof miFuncion);

let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
*/
/*
let sumar = function(a, b){return a + b}; //! DECLARACION DE UNA FUNCION DE TIPO EXPRESION

resultado = sumar(1, 2);
console.log(resultado);

const sumarFuncionTipoFlecha = (a, b) => a + b; //! FUNCION TIPO FLECHA
resultado = sumarFuncionTipoFlecha (3, 5);
console.log(resultado);

let sumar2= function (a, b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
}

result = sumar2(2, 3);
console.log(result);

*/
/*

let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(i = 0; i < arguments.length; i++){
        suma += arguments[i]; // suma = suma + arguments[i];
        
    }
    return suma;
}
*/

//! PASO POR VALOR EN FUNCIONES

//! Valores de tipo primitivos
/*
let x = 10;

function cambiarValor(a){
    a = 20;
}


cambiarValor(x); //10
console.log(x);
*/
//! PASO POR REFERENCIA EN FUNCIONES
/*
const persona = {
    nombre: 'Franco',
    apellido: 'Bizzarri'
};

function cambiarValorObjeto(p1){
    p1.nombre = 'Maximiliano';
    p1.apellido = 'Cruz';
}

cambiarValorObjeto(persona);
console.log(persona);
*/