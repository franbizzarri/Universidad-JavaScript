// let autos = new Array("BMW", "Mercedes Benz", "Volvo"); -----> FORMA ANTIGUA DE DECLARAR ARREGLOS

const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(i = 0; i < autos.length; i++){
    console.log(i + ' : ' +autos[i]);
}

autos[1] = 'MercedesBenz';
console.log(autos[1]);

autos.push('Audi'); //! EL METODO PUSH SIRVE PARA AGREGAR UN ELEMENTO AL ARREGLO
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Cadillac';
console.log(autos);

autos[5] = 'Porsche';
console.log(autos);

console.log(typeof autos);

console.log(Array.isArray(autos)); //! METODO PARA AVERIGUAR SI ES UN ARREGLO

console.log(autos instanceof Array); //! OTRO METODO PARA AVERIGUAR SI ES UN ARREGLO