class Compra {
    constructor(carritoDeProductos){
    this.carrito = carritoDeProductos
    }
    obtenerPrecioTotal(){
        if (this.carrito.length > 0){
            return this.carrito.reduce((acc, producto)=> acc + producto.precio, 0)
        }
    }
}