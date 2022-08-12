for (let i = 1; i <= 99;) {
    let nombrePersona = prompt("ingrese su nombre para ser atendido");
    alert("Turno Numero " + i + " Cliente: " + nombrePersona);
    console.log("Cliente Numero: " + i);
    console.log("Nombre del Cliente: " + nombrePersona);
    break;
}

//En objetos agregue la venta de una casa como si de una inmobiliaria se tratara

const Casa1 = {
    Nombre: "casa",
    Accion: "comprar",
    Localidad: "Avellaneda",
    Garantia: ["si", "no"],
    Valor: 170000,
    MetrosCuadrados: "150m2",
};

//todo lo que se muestra en consola sera mostrado en un sistema de cartas donde estaran las propiedades a disposicion

console.log("la propiedad es una " + Casa1.Nombre);
console.log("usted quiere " + Casa1.Accion);
console.log(
    "La localidad de su " + Casa1.Nombre + " se encuetra en " + Casa1.Localidad
);
console.log("usted " + Casa1.Garantia[1] + " necesita garantia");
console.log("La propiedad tiee un valor de $" + Casa1.Valor + " dolares");
console.log("Cuenta con unos " + Casa1.MetrosCuadrados);

//todos los valores tanto de la csaas como de los departamentos estan en dolares

const departamentos = [
    { accion: "comprar Chacarita", precio: 70000 },
    { accion: "comprar San martin", precio: 120000 },
    { accion: "alquilar Belgrano", precio: 500 },
    { accion: "alquilar Avellaneda", precio: 980 },
];

const resultado = departamentos.find((el) => el.accion === "comprar chacarita");

console.log(resultado);
//en este momento se le daria la opcion al cliente de que propiedad quiere elegir antes de que pase a la parte del valor del producto

//en la proxima entrega se sumara que el valor del producto pase directamente a ser pagado sin que le cliente tenga que tener alguna accion con la parte del valor del producto

//simulacion de un prestamo en cuotas, que se podria utilizar para un producto

function IngresoValor() {
    let valor = parseInt(prompt("ingresar valor del producto"));
    alert("La cantidad es = " + valor);
    return valor;
}

function NCuotas() {
    let DivisionCuotas = parseInt(
        prompt("puede hacerlo hasta 78 cuotas, en cuantas las va a hacer?")
    );
    alert("Su propiedad se hara en " + DivisionCuotas + " cuotas");
    return DivisionCuotas;
}

let valor = IngresoValor();
let DivisionCuotas = NCuotas();

function dividir(dato1, dato2) {
    let resultado = dato1 / dato2;
    return resultado;
}

//todos los resultados mostrados en consola
console.log("El valor es:" + valor);
console.log("Las cuotas son:" + DivisionCuotas);

let division = dividir(valor, DivisionCuotas);

console.log(
    "Seran " + DivisionCuotas + " cuotas de $" + division + " dolares por mes"
);

let cartas = document.getElementsByClassName("cartas");

console.log(cartas[0].innerHTML);
console.log(cartas[1].innerHTML);
console.log(cartas[2].innerHTML);
console.log(cartas[3].innerHTML);
