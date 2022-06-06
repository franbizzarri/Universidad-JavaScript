class Producto{

    static contadorProductos = 0;

    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `ID Producto: ${this._idProducto}.
                Nombre: ${this._nombre}.
                Precio: $${this._precio}.`;
    }
}

let producto1 = new Producto('Pantalon', 5000);
let producto2 = new Producto('Camisa', 2500);
console.log(producto1.toString());
console.log(producto2.toString());

class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productosAgregados = ++Orden.contadorProductosAgregados;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else{
            console.log('No se pueden agregar más productos.');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrden}.
                    Total: ${this.calcularTotal()}
                    Productos: ${this.productosOrden}`);
    }
    
}