//! OPERADORES ARITMETICOS EN JS
/*
+: Suma
-: Resta
*: Multiplicacion
**: Exponente
/: Division
%: Modulo (resto de una division)
++: Incremento
--: Decremento
*/
/*
let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: "+ z);

z = a - b;
console.log("Resultado de la resta: "+ z);

z = a * b;
console.log("Resultado de la multiplicacion: "+ z);

z = a / b;
console.log("Resultado de la division: "+ z);

z = a % b; //Resto de la division.
console.log("Resultado de operacion modulo/residuo: "+ z);

z = a ** b;
console.log("Resultado de operador exponente: "+ z);

z = a + b;

//! INCREMENTO
//! Pre-incremento (el operador ++ antes de la variable)

z = ++a;
console.log(a);
console.log(z);

//! Post-incremento (el operador ++ despues de la variable)

z = b++;
console.log(b);
console.log(z);

//! DECREMENTO
//! Pre-decremento (el operador -- antes de la variable)

z = a;
z = --a;
console.log(z);

//! Post-decremento (el operador -- despues de la variable)

z = b--;
console.log(b);
console.log(z);
*/
/*
let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

*/
/*
//! OPERADOR DE ASIGNACION

let a = 1;

a += 3; // a = a + 3 
console.log(a);

a -= 2; // a = a - 2 
console.log(a);

a **= 2;
console.log(a);

/* MAS OPERADORES DE ASIGNACION COMPUESTOS
*=
/=
%=
**=

*/


//! OPERADORES DE COMPARACION
/*
let a = 3, b = 2, c = "3";

let z = a == b; // Se revisa el valor sin importar el tipo de dato
console.log(z);

z = a === c;    // Revisa los valores pero tambien los tipos de datos
console.log(z);

z = a != b;
console.log(z);

z = a !== c;
console.log(z);
*/
//! OPERADORES RELACIONALES
/*
let a = 3, b = 3, c = "3";

let z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);
*/
/*
//! OPERADORES LOGICOS
//! AND (&&) TRUE solo si ambos operandos son TRUE
let a = 5;
let min = 0, max = 10;

if(a >= min && a <= max){
    console.log("Se encuentra dentro del rango");
}else{
    console.log("Se encuentra fuera del rango");
}

//! OR (||) TRUE si cualquier operando es TRUE
let vacaciones = true, diaDescanso = false;

if(vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego del hijo.");
}else{
    console.log("El padre esta ocupado.");
}
*/
//! OPERADOR TERNARIO
/*
let resultado = (3 > 4) ? "verdadero" : "falso";
console.log(resultado);

let num = 9;

resultado = (num % 2 == 0) ? "Par" : "Impar";
console.log(resultado);
*/

//! CONVERSION DE TIPO DE DATO STRING A TIPO NUMBER
/*
let miNumero = "21";
//console.log(typeof miNumero);

let edad = Number(miNumero); //! FUNCION NUMBER PARA CONVERTIR UN STRING A NUMERO
console.log(edad);

if(isNaN(edad)){  //! isNaN ES UNA FUNCION PARA COMPROBAR SI EL VALOR DE UNA VARIABLE ES UN NUMERO O NO
    console.log("No es un numero");
}else{

    if(edad >= 18){
        console.log("La persona puede votar.");
    }
    else{
        console.log("Muy joven para votar.");
    }
    

}

if(isNaN(edad)){ 
    console.log("No es un numero");
}
else{
    let resultado = edad >= 18 ? "La persona puede votar" : "Muy joven para votar.";
    console.log(resultado);
}

*/

let x = 5;
let y = 10;
let z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);

let resultado = 4 + 5 * 6 / 3;
console.log(resultado);

resultado = (4 + 5) * 6 / 3;
console.log(resultado);