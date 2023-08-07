const tarjetas = document.querySelector("div#divProductos")
const buscar = document.querySelector("input#barraBusqueda")
const carritoIndex = document.querySelector("#contadorCarrito")
const URLArray = "js/productos.json"


function crearTarjetaProducto (producto){
    return `<div class="divProducto p-3 shadow col-xl-3 col-md-5 col-10">
                <div class="text-center p-3">
                    <h3>${producto.imagen}</h3>
                    <h4>${producto.nombre}</h4>
                </div>
                <div class="text-center">
                    <p>USD ${producto.precio}</p>
                </div>
                <div class="text-center">
                    <button id="${producto.codigo}" class="boton-producto shadow">Agregar al Carrito</button>
                </div>
            </div>`
}

function clickBotonAgregarACarrito(){
    const botones = document.querySelectorAll("button.boton-producto")
    botones.forEach((boton)=>{
        boton.addEventListener("click", ()=>{
            let prodSeleccionado = productos.find((producto)=> producto.codigo === parseInt(boton.id))
            carrito.push(prodSeleccionado)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se agregó el producto al carrito',
                showConfirmButton: false,
                timer: 1500
            })
            guardarCarritoLocalStorage()
        })
    })
}

function cargarProductos(array){
    tarjetas.innerHTML = ""
    if(array.length > 0){
    array.forEach((producto) => tarjetas.innerHTML += crearTarjetaProducto(producto))
    clickBotonAgregarACarrito()
}
        else{Swal.fire({
            title: "Lo sentimos!",
            text: "No pudimos encontrar el producto, inténtalo denuevo.",
            icon: "warning",
            confirmButtonText: "Aceptar"
        })}                        
}

buscar.addEventListener("search", ()=>{
    if (buscar.value.trim() !== "") {
        let arrayBusqueda = productos.filter((producto)=> producto.nombre.toLowerCase().includes(buscar.value.trim().toLowerCase()))
        cargarProductos(arrayBusqueda)
    } else {
        cargarProductos(productos)
    }
}) 

buscar.addEventListener("search", ()=>{
    if (buscar.value.trim() !== "") {
        let arrayBusqueda = productos.filter((producto)=> producto.nombre.toLowerCase().includes(buscar.value.trim().toLowerCase()))
        cargarProductos(arrayBusqueda)

    } 
}) 

async function cargarArrayURL (){
    try{
        const response = await fetch(URLArray)
        const data = await response.json()
        productos.push(...data)
        cargarProductos(productos)
    } catch(error){
        console.error("se ha producido un error", error)
        tarjetas.innerHTML = "<div> <h3>Error al conectarse con el servidor, por favor intentelo de nuevo.</h3> </div>"
    }
}

cargarArrayURL ()
