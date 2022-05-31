//! CREACION DE UN OBJETO (METODO MAS USADO)
/*
let persona = {
    nombre: 'Franco',
    apellido: 'Bizzarri',
    edad: 29,
    email: 'francobizzarri@hotmail.com',
    nombreCompleto: function(){
        return this.nombre + '  ' + this.apellido;
    }
}
*/
/*
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona);
console.log(persona.nombreCompleto());

//! OTRA FORMA DE CREAR OBJETOS
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.apellido = 'Lara';
persona2.direccion = 'Rivadavia 926';
persona2.telefono = '2616525783';
*/

//!OTRA FORMA DE ACCEDER A LOS ELEMENTOS DE UN OBJETO
//console.log(persona['apellido']);

// for in: sirve para recorrer el objeto y acceder a sus propiedades mediante un ciclo for
/*
for(nombrePropiedad in persona){
    console.log(nombrePropiedad); //MUESTRA LOS ELEMENTOS DEL OBJETO
    console.log(persona[nombrePropiedad]); //MUESTRA EL VALOR ALMACENADO EN LOS ELEMENTOS DEL OBJETO
}
*/

//! AGREGAR Y ELIMINAR PROPIEDADES DE UN OBJETO
/*
persona.tel = '2616525783';
console.log(persona);

delete persona.tel;
console.log(persona);

//! FORMAS DE IMPRIMIR UN OBJETO EN JS
// concatenar cada valor de cada propiedad
console.log(persona.nombre+ ', ' + persona.apellido);

//for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//sentencia Objet.values devuelve el objeto en forma de Array
let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

*/
//! METODO GET
/*
let persona = {
    nombre: 'Franco',
    apellido: 'Bizzarri',
    edad: 29,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    email: 'francobizzarri@hotmail.com',
    get nombreCompleto(){
        return this.nombre + '  ' + this.apellido;
    }
}

console.log(persona.lang);

persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma);
*/
//! FUNCION CONSTRUCTOR
/*
//Funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + '  ' + this.apellido;
    }
}

//! EL METODO PROTOTYPE SE UTILIZA PARA AGREGAR UN ATRIBUTO A TODOS LOS OBJETOS SIN MODIFICAR LA FUNCION CONSTRUCTOR
Persona.prototype.tel = '2616525783';


let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
console.log(padre.nombreCompleto());
console.log(padre.tel);
let madre = new Persona('Laura', 'Quintero', 'lquintero@gmail.com');
madre.tel = '2615433769';
console.log(madre);
console.log(madre.tel);
padre.nombre = 'Carlos';
console.log(padre);
console.log(madre.nombreCompleto());

*/

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        //return this.nombre + '  ' + this.apellido;
        return titulo + ': ' +  this.nombre + '  ' + this.apellido + ',  ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso de 'apply' para llamar un metodo en un objeto que no tiene definido dicho metodo

// Uso de 'call' para usar el metodo persona1.nombreCompleto con los datos del objeto persona2

console.log(persona1.nombreCompleto('Lic.', '2616525783'));

let arreglo = ['Ing.', '2615433769'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));