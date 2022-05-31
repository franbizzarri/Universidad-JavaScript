/*      //! SENTENCIA IF ELSE
let mes = ;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "Verano";
}
else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "Otoño";
}
else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "Invierno";
}
else if(mes == 9 || mes == 10 || mes == 11){
    estacion = "Primavera";
}
else{
    console.log("Valor incorrecto.");
}

*/
/*
let hora = 10;

if(hora >= 6 && hora <= 11){
    console.log("Buenos dias");
}
else if(hora >= 12 && hora <= 18){
    console.log("Buenas tardes");
}
else if(hora >= 19 && hora <= 24){
    console.log("Buenas noches");
}
else if(hora >= 0 && hora <= 6){
    console.log("Durmiendo");
}
else{
    console.log("Dato incorrecto.");
}
*/

//! SENTENCIA SWITCH

let mes = 4;
let estacion;

switch(mes){
    case 1:  case 2: case 12:
        estacion = "Verano";
    break;
    case 3: case 4: case 5:
        estacion = "Otoño";
    break;
    case 6: case 7: case 8:
        estacion = "Invierno";
    break;
    case 9: case 10: case 11:
        estacion = "Primavera";
    break;

    default:
        estacion = "Valor incorrecto.";
}
console.log(estacion);

