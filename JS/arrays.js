const productos = []

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

