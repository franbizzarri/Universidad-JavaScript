//! Declaracion de PROMESA

let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if(expresion){
        resolved('Resolvió correctamente');
    }else{
        rejected('Se produjo un error');
    }    
}); 

// miPromesa.then(valor => console.log(valor), error => console.log(error));
// miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));


let promesa = new Promise( resolved => setTimeout(() => resolved('Saludos con promesa y TimeOut'), 3000));

// promesa.then(valor => console.log(valor));

//! Async: Indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

// miFuncionConPromesa().then(valor => console.log(valor));


//! Async / Await: 

async function funcionConPromesaYAwait(){
    let miPromesa2 = new Promise( resolved => resolved('Promesa con await'));
    console.log(await miPromesa2);  // Await solo se puede usar dentro de una funcion declarada con async
}

// funcionConPromesaYAwait();

//! Promesas, await, async y setTimeOut

async function funcionConPromesaAwaitYTimeOut(){
    let miPromesa3 = new Promise( resolved => setTimeout( () => resolved('Promesa con await y timeOut'), 3000));
    console.log(await miPromesa3);
}

funcionConPromesaAwaitYTimeOut();
