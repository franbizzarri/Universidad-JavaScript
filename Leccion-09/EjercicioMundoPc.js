class DispositivoEntrada{ 
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(entrada){
        this._tipoEntrada = entrada;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `
                Tipo de Entrada: ${this._tipoEntrada}.
                ID Raton: ${this._idRaton}.
                Marca: ${this._marca}`;
    }

}

let raton1 = new Raton('Mouse', 'Razer');
console.log(raton1.toString());
let raton2 = new Raton('Mouse', 'Logitech');

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `
                Tipo de Entrada: ${this._tipoEntrada}.
                ID Teclado: ${this._idTeclado}.
                Marca: ${this._marca}`;
    }
}

let teclado1 = new Teclado('Teclado', 'Razer');
console.log(teclado1.toString());
let teclado2 = new Teclado('Teclado', 'HyperX');

class Monitor{
    
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get IdMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `
                ID Monitor: ${this._idMonitor}.
                Marca: ${this._marca}.
                Tamaño: ${this._tamaño}`;
    }
}

let monitor1 = new Monitor('BENQ', '27"');
console.log(monitor1.toString());
let monitor2 = new Monitor('Samsung', '27"');

class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `ID Computadora: ${this._idComputadora}.
                Nombre: ${this._nombre}.
                Monitor: ${this._monitor}.
                Teclado: ${this._teclado}.
                Ratón: ${this._raton}.\n`;
    }
}

let computadora1 = new Computadora('Jarvis', monitor1, teclado1, raton1);
console.log(computadora1.toString());
let computadora2 = new Computadora('Friday', monitor2, teclado2, raton2);

class Orden{

    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadora = [];
    }

    agregarComputadora(computadora){
        this._computadora.push(computadora);
    }
    
    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadoras of this._computadora){
            computadorasOrden += computadoras.toString() + ' ';
        }
        console.log(`
                ID Orden: ${this._idOrden}.
                Computadoras: 
                ${computadorasOrden}.`);
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();