class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `
                Empleado: 
                Nombre: ${this._nombre}.
                Sueldo: $${this._sueldo}`;
    }
}

let empleado1 = new Empleado('Sofia', 6500);

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `
                Gerente: ${super.obtenerDetalles()}
                Departamento: ${this._departamento}.`;
    }

}

let imprimir = tipo => {
    console.log(tipo.obtenerDetalles()); // POLIMORFISMO
    //! instanceof SIRVE PARA PREGUNTAR QUE TIPO DE OBJETO ES EL RECIBIDO
    if(tipo instanceof Empleado) console.log("Es un objeto de tipo Empleado");
    if(tipo instanceof Gerente) console.log("Es un objeto de tipo Gerente");
}
let gerente1 = new Gerente('Franco', 5000, 'Web Development');
console.log(gerente1.obtenerDetalles());

imprimir(empleado1);
imprimir(gerente1);

