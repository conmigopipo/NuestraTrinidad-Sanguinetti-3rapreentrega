const carrito = []

const productos = [ {imagen:"💻", codigo: 1, nombre:"AMD RYZEN 5, 5000 SERIES", precio: 89.88},
                    {imagen:"🎧", codigo: 2, nombre:"AKG K72", precio:38.50},
                    {imagen:"🖱️", codigo: 3, nombre:"Logitech G203", precio: 21.99},
                    {imagen:"🎵", codigo: 4, nombre:"Focusrite Scarlett 2i2 3ra Generación", precio: 114.00},
                    {imagen:"🪫", codigo: 5, nombre:"EVGA 600W", precio: 62.98},
                    {imagen:"🎤", codigo: 6, nombre:"Shure SM57", precio: 99.00},
                    {imagen:"🎹", codigo: 7, nombre:"Akai Mpk Mini3", precio: 218.90}]

function buscarProducto(codigo) {
        let resultado = productos.find((producto)=> producto.codigo === parseInt(codigo))
        return resultado
}

function precioTotal() {
    const venta = new Compra(carrito)
    console.log("El precio total de su carrito es de USD " + (venta.obtenerPrecioTotal()).toFixed(2) + ". Muchas gracias.")
}

function comprar() {
    let codigo = prompt("Ingrese el código numérico del producto a comprar:")
    let productoSeleccionado = buscarProducto(codigo)
    if (productoSeleccionado !== undefined){
        carrito.push(productoSeleccionado)
        console.log(productoSeleccionado.nombre + " se agregó a su Carrito. 🛒")
        let respuesta = confirm("¿Desea comprar otro producto?")
        if(respuesta === true){
            comprar()
        } else{
            console.table(carrito)
            precioTotal()
        }
    } else {
        alert("Codigo no reconocido. Refresque el sitio e intentelo de nuevo.")
    }
}



