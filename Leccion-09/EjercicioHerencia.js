class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get edad(){
        return this._edad;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){
        return `ID: ${this._idPersona}. 
                Nombre: ${this._nombre}. 
                Apellido:  ${this._apellido}.
                Edad: ${this._edad}`;
    }
}

let persona1 = new Persona('Franco', 'Bizzarri', 29);
console.log(persona1.toString());


class Empleado extends Persona{

    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()}. 
                ID Empleado: ${this._idEmpleado}. 
                Sueldo: ${this._sueldo}`;
    }
}

let empleado1 = new Empleado('Juan', 'Perez', 35, 'US$ 3.000');
console.log(empleado1.toString());
let empleado2 = new Empleado('Laura', 'Quintero', 40, 'US$ 5.000');
console.log(empleado2.toString());


class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorCliente;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fecha){
        this._fechaRegistro = fecha;
    }
    toString(){
        return `${super.toString()}. 
                ID Cliente: ${this._idCliente}. 
                Fecha de Registro: ${this._fechaRegistro}`;
    }
}

let cliente1 = new Cliente('Sofia', 'Perviú', '27', new Date() );
console.log(cliente1.toString());
let cliente2 = new Cliente('Maria', 'Lara', 28, new Date() );
console.log(cliente2.toString());