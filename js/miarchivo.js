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

