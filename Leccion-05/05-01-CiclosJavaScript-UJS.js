/*
let contador = 0;

//! CICLO WHILE

while(contador < 3){
    console.log(contador);
    contador++;
}
*/
//! CICLO DO WHILE
/*
do{
    console.log(contador);
    contador++;
}while(contador < 3);
*/

//! CICLO FOR
/*
for(let contador = 0; contador < 3; contador++){
    console.log(contador);
}
*/

//! USO DE LA PALABRA BREAK EN JAVASCRIPT
/*
for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){
    console.log(contador);
    break;
    }    
}
*/

//! USO DE LA PALABRA CONTINUE EN JAVASCRIPT

inicio:
for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 !== 0){
        continue inicio; // ir a la siguiente iteracion
    }
    else{
        console.log(contador);
    }
}


