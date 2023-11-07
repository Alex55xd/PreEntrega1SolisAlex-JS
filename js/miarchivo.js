function precioTarjeta(codigo){
    switch(codigo) {
        case 12:
            console.log("Precio del iPhone 12 con tarjeta:")
            for (let i=1; i<= 6; i++){
                precio = 600
                console.log(i + " pago(s) de $"+ precio/i)
            }
            break
        case 13:
            console.log("Precio del iPhone 13 con tarjeta:")
            for (let i=1; i<= 6; i++){
                precio = 700
                console.log(i + " pago(s) de $"+ (precio/i).toFixed(2))
            }
            break
        case 14:
            console.log("Precio del iPhone 14 con tarjeta:")
            for (let i=1; i<= 6; i++){
                precio = 800
                console.log(i + " pago(s) de $"+ (precio/i).toFixed(2))
            }
            break
        case 15:
            console.log("Precio del iPhone 15 con tarjeta:")
            for (let i=1; i<= 6; i++){
                precio = 900
                console.log(i + " pago(s) de $"+ precio/i)
            }
            break
        default:
            alert("No entendi tu eleccion")
    }
}

function consultarPrecio() {
    let consultar = true

    while(consultar) {
        let consultarPrecio = prompt("¿Que iPhone te interesa pagar con tarjeta? iPhone:")
    
        if (consultarPrecio != '' && consultarPrecio != null) {
            precioTarjeta(parseInt(consultarPrecio))
        } else {
            alert("Ingeresa un numero de iPhone disponible de 12 al 15")
        }
        consultar = confirm("¿Queres conocer el precio de otro iPhone?")
    } 
}

/* agregar o quitar items de arrays
function quitarPais() {

    let paisAquitar = prompt("Ingresa el país a retirar del array:")

    let idx = paises.indexOf(paisAquitar)

 

    if (idx > -1) {

        let paisQuitado = paises.splice(idx, 1)

        console.log("Se ha quitado a", paisQuitado, "del array.")

    } else {

        console.warn("No se encontró el país indicado.")

    }

    cargarPaises()

}

const paises = ['Argentina', 'Uruguay', 'Chile', 'Venezuela', 'Surinam', 'Brasil', 'Ecuador', 'Colombia']


function agregarPais() {

    let nuevoPais = prompt("Ingresa el nuevo país a agregar:")

 

    if (paises.includes(nuevoPais)) {

        console.warn("El país ya existe en el array. Evitamos duplicarlo.")

    } else {

        paises.push(nuevoPais)

        cargarPaises()

    }

}
*/