// EJEMPLO DE USO PALABRA STATIC EN CLASES
//! UTILIZAMOS LA PALABRA STATIC PARA CREAR UN CONTADOR A LA CLASE PERSONA 
//! Y QUE SE INCREMENTE CADA VEZ QUE SE CREE UN OBJETO NUEVO 

class Persona{
    static contadorPersonas = 0; // Atributo Static de la clase Persona
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return `ID: ${this.idPersona} - Nombre completo: ${this._nombre} ${this.apellido}`;
    }
    toString(){
        return this.nombreCompleto();
    }
    
    static saludar(){
        console.log('Saludos desde metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre + '  ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // llamar al constructor de la clase padre (class Persona)
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura: modificar el comportamiento de algun metodo definido en la clase padre
    nombreCompleto(){
        return super.nombreCompleto() + ',  ' + this._departamento;
    }
}

let persona1 = new Persona('Franco', 'Bizzarri');
console.log(persona1.nombreCompleto()); //get nombre
let persona2 = new Persona('Sofia', 'Perviú');
console.log(persona2.nombreCompleto());
let persona3 = new Persona ('Emma', 'Bizzarri');
console.log(persona3.nombreCompleto());