function precioTarjeta(modelo){
    switch(modelo) {
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

const carrito = []

const celulares = [{imagen: '📱', codigo: 1, nombre: 'iPhone 11', precio: 500},
                 {imagen: '📱', codigo: 2, nombre: 'iPhone 11 pro', precio: 600},
                 {imagen: '📱', codigo: 3, nombre: 'iPhone 12', precio: 600},
                 {imagen: '📱', codigo: 4, nombre: 'iPhone 12 pro', precio: 700},
                 {imagen: '📱', codigo: 5, nombre: 'iPhone 13', precio: 700},
                 {imagen: '📱', codigo: 6, nombre: 'iPhone 13 pro', precio: 800},
                 {imagen: '📱', codigo: 7, nombre: 'iPhone 14', precio: 800},
                 {imagen: '📱', codigo: 8, nombre: 'iPhone 14 pro', precio: 900},
                 {imagen: '📱', codigo: 9, nombre: 'iPhone 15', precio: 900},
                 {imagen: '📱', codigo: 10, nombre: 'iPhone 15 pro', precio: 1000}]

function buscarCelular(codigo) {
    let celularSeleccionado = celulares.find((celular)=> celular.codigo === codigo )
    return celularSeleccionado
}

function comprar() {
    let codigo = prompt("Ingresa el código del iPhone\n(el cód. numérico del HTML)")
    let celularElegido = buscarCelular(parseInt(codigo))

    if (celularElegido !== undefined) {
        
        carrito.push(celularElegido)
        alert(celularElegido.nombre + " se agregó al carrito.")
        let respuesta = confirm("¿Deseas agregar otro celular?")
        if (respuesta === true) {
            comprar()
        } else {  
          console.log("terminado")
        }

    } else {
        alert("⛔️ Error en el código de prenda ingresado.\nRefresca para comenzar de nuevo.")
    }
}
