for ( let i=1; i <= 5;) {
    let nombrePersona = prompt("ingrese su nombre para ser atendido");
    alert ("Turno Numero "+i+" Cliente: "+  nombrePersona)
    console.log("Cliente Numero: " + i)
    console.log("Nombre del Cliente: " + nombrePersona)
    break
}

//simulacion de un prestamo en cuotas, que se podria utilizar para un producto 

function IngresoValor(){
    let valor = parseInt(prompt("ingresar valor"));
    alert("La cantidad es = " + valor)
    return valor
}

function NCuotas(){
    let DivisionCuotas = parseInt(prompt("puede hacerlo hasta 12 cuotas, en cuantas las va a hacer?"));
    alert("El prestamo sera en " + DivisionCuotas + " cuotas")
    return DivisionCuotas
}

let valor = IngresoValor()
let DivisionCuotas = NCuotas()

function dividir(dato1, dato2){
    let resultado = dato1 / dato2;
    return resultado
}  

//todos los resultados mostrados en consola
console.log("El valor es:" + valor)
console.log("Las cuotas son:" + DivisionCuotas)

let division = dividir(valor, DivisionCuotas)

console.log("Seran " + DivisionCuotas + " cuotas de $" + division)
