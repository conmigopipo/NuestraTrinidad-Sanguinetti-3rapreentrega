let interes = 1.20

function cuotas(id) {
    let precio = 0
    if (id === "1"){
        precio = 89.88
    } else if (id === "2"){
        precio = 38.50
    } else if (id === "3"){
        precio = 21.99
    } else if (id === "4"){
        precio = 114.00
    }
    console.log("Ofrecemos: ⬇️")
    for (let i = 1; i <= 8; i++) {
        console.log( i + " cuota(s) (sin interés) de: USD " + (precio / i).toFixed(2))
    }
    for (let i = 9; i <= 12; i++){
        console.log( i + " cuotas (con interés) de: USD " + ((precio  * interes) / i).toFixed(2))
    }
}

function precios(id){
    switch (id) {
        case "1":
            console.log("AMD RYZEN 5, 5000 SERIES: USD 89.88")
            break
        case "2":
            console.log("AKG K72: USD 38.50")
            break
        case "3":
            console.log("Logitech G203: USD 21.99")
            break
        case "4":
            console.log("Focusrite Scarlett 2i2 3ra Generación: USD 114.00")
            break
        default:
            console.log("🧐 No entendimos su selección.")
            break
    }

}

function consultar(){
    let respuesta = confirm("¿Desea conocer el precio de algun producto?")
    if (respuesta === true){
        let id = prompt("Ingrese el ID del producto:")
            precios(id)  
            cuotas(id)
    } 
    else {console.warn("😒 Cualquier cosa a las órdenes.")}
}