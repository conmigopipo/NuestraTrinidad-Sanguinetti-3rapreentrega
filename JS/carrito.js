const tablaCarrito = document.querySelector("#tablaCarrito")
const divTotal = document.querySelector("#totalCarrito")
const botonFinalizar = document.querySelector("#botonFinalizarCompra")



function mostrarProductoCarrito(producto){
    return`<tr>
                <th>${producto.imagen}</th>
                <th>${producto.nombre}</th>
                <th>USD ${producto.precio}</th>
            </tr>`
}

function cargarProductosCarrito(carrito){
    tablaCarrito.innerHTML = ""
    if(carrito.length > 0){
    carrito.forEach((producto) => tablaCarrito.innerHTML += mostrarProductoCarrito(producto))
}              
}

cargarProductosCarrito(carrito)

function mostrarTotal(){
    return`<p>Total: USD ${total}<p>`
}

let total = 0

function calcularTotal(){
    if (carrito.length > 0){
        carrito.forEach((producto)=>{
            total+= producto.precio
        })
        divTotal.innerHTML = mostrarTotal()
    } else {
        divTotal.innerHTML = mostrarTotal()
    }
}

function vaciarCarrito(){
    localStorage.clear()
    tablaCarrito.innerHTML = ""
    divTotal.innerHTML = "Total: USD 0"
}

botonFinalizar.addEventListener("click", ()=>{
    Swal.fire({
        title: 'Quieres finalizar tu compra?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Gracias por elegirnos!', '', 'success')
          vaciarCarrito()
        } else if (result.isDenied) {
          Swal.fire('La compra fue cancelada', '', 'info')
        }
      })
})


calcularTotal()
