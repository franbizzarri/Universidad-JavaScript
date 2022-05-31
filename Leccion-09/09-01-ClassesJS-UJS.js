class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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
        return this._nombre + '  ' + this.apellido;
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
console.log(persona1.toString()); //get nombre

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto()); //ACCEDE AL METODO GET DEFINIDO EN LA CLASE CONSTRUCTOR PADRE
console.log(empleado1.toString());

//persona1.saludar(); //! NO ES POSIBLE LLAMAR UN METODO STATIC DESDE UN OBJETO
Persona.saludar();  //! LOS METODOS STATIC SE LLAMAN DIRECTAMENTE DESDE LA CLASE
Persona.saludar2(persona1);
