"use strict";

try{

    let x = 10;
    throw 'Mi error';

}
catch(error){
    console.log(error);
}
finally{    //finally es opcional
    console.log('Termina la revision de errores');
}

console.log('Continuamos...');

//--------------------------------------------------------
//! LA SENTENCIA THROW ARROJA ERRORES 
let resultado = 5;
try{
    if(isNaN(resultado)) throw 'No es un número';
    else if(resultado === '') throw 'Es cadena vacía';
    else if(resultado >= 0) throw 'Valor positivo';
    else if(resultado < 0) throw 'Valor negativo'
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('Termina revision de errores');
}

