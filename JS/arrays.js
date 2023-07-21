const productos = [ {imagen:"💻", codigo: 1, nombre:"AMD RYZEN 5, 5000 SERIES", precio: 89.88},
                    {imagen:"🎧", codigo: 2, nombre:"AKG K72", precio:38.50},
                    {imagen:"🖱️", codigo: 3, nombre:"Logitech G203", precio: 21.99},
                    {imagen:"🎵", codigo: 4, nombre:"Focusrite Scarlett 2i2 3ra Generación", precio: 114.00},
                    {imagen:"🪫", codigo: 5, nombre:"EVGA 600W", precio: 62.98},
                    {imagen:"🎤", codigo: 6, nombre:"Shure SM57", precio: 99.00},
                    {imagen:"🎹", codigo: 7, nombre:"Akai Mpk Mini3", precio: 218.90},
                    {imagen:"🔌", codigo: 8, nombre:"Cable XLR-XLR 3mts Roland", precio: 25.00},
                    {imagen:"🎸", codigo: 9, nombre:"Guitarra Eléctrica Yamaha Pacífica 012", precio: 359.00},
                    {imagen:"🎺", codigo:10, nombre:"Trompeta Yamaha YTR 2330", precio: 1159.00},
                    {imagen:"🎷", codigo:11, nombre:"Saxo Tenor Roy Benson TS202", precio: 1272.00},
                    {imagen:"🎻", codigo:12, nombre:"Violín 4/4 Alabama GVT015C", precio: 119},
                    {imagen:"⌨️", codigo:13, nombre:"Controlador Midi Akai Apc Mini", precio: 189.00},
                    {imagen:"💽", codigo:14, nombre:"Bandeja De Vinilo Ion Classiclp", precio: 159.00}]



function guardarCarritoLocalStorage(){
   if(carrito.length > 0){
    localStorage.setItem("carrito", JSON.stringify(carrito))
    carritoIndex.innerHTML = contadorCarrito()
   }    
}

function contadorCarrito() {
    return `<p>${carrito.length}<p> `
}

function recuperarCarritoLocalStorage() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"))
    } else {
        return []
    }
}

const carrito = recuperarCarritoLocalStorage()

