class Compra { // sustantivo, singular, palabra simple, instanciable 
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal() {
        if (this.carrito.length > 0) { //función de orden superior REDUCE()
            return this.carrito.reduce((acumulador, celular)=> acumulador + celular.precio, 0)
        }
    }
}