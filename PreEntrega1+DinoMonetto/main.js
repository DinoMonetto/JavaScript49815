// Aca defini las variables que voy a utilizar en este proyecto //
let usuario = "RULO19"
let contraseña = "123"
let manosJugadas = 1
let victorias = 0
let derrotas = 0
let empates = 0
let cantidadManos

// Utilice un prompt para que el usuario ingrese sus datos, donde la contraseña es 123 y el usuario RULO19m el UpperCase es para que no haya problemas con las mayusculas o minus
let id = prompt("Ingrese su Usuario").toUpperCase()
let pass = prompt("Ingrese su contraseña")

// el while lo utilice para que si la contraseña o el usuario es incorrecto se tenga que volver a poner

while ((id !== usuario || pass !== contraseña)) {
    alert("Usuario o contraseña equivocada. Inténtelo de nuevo.")

    id = prompt("Ingrese su Usuario").toUpperCase()

    pass = prompt("Ingrese su contraseña")
}

console.log("Bienvenido RULO19");

// con este for le pido al usuario que diga cuantas manos quiere jugar, utilce el number para trasformar de str a int


while (isNaN(cantidadManos) || cantidadManos <= 0) {
    cantidadManos = Number(prompt("¿Cuántas manos jugamos rulito?"))

    if (cantidadManos === null) {
        alert("Ingresa la cantidad de manos que quieras jugar")

    } else if (isNaN(cantidadManos) || cantidadManos <= 0) {
        alert("Dale, no podemos jugar 0 manos.")
    }
}

for (let i = 1; i < cantidadManos; i++) {
    manosJugadas++
    piedraPapelTijeras()
}

// cree la funcion para poder jugar a piedra papel o tijeras (tuve que investigar como usar arrays para poder jugar usuario vs computadora, y tambien
// aprendi que para que funcione tuve que usar un math.floor para que los indices del array sea un numero entero
// si no me daba error jaja, como tambien la parte del lenght que me da la cantidad de elemetos)

function piedraPapelTijeras() {

    let opciones = ["piedra", "papel", "tijeras"]

    let eleccionRulo 

// este while es para asegurar que la opcion sea piedra papel o tijeras

    while (true) {
        eleccionRulo = prompt("Que elegis? piedra, papel o tijeras").toLowerCase();

        if (opciones.includes(eleccionRulo)) {
            break;  // utilizo un break para que si la opcion es correcta, salga del break
        } else {
            alert("Ingresa una de estas opciones: piedra, papel o tijeras");
        }
    }

// con opciones[] puedo acceder a los elementos del array, como escribi arriba, tuve que buscar como hacerlo porque no me salia jaja

    let eleccionAleatoria = opciones[Math.floor(Math.random() * opciones.length)]

    alert("Su elección: " + eleccionRulo)
    alert("Mi Elección: " + eleccionAleatoria)

    if (eleccionRulo === eleccionAleatoria) {
        alert("Empatamos")
        empates++
    } else if (
        (eleccionRulo === "piedra" && eleccionAleatoria === "tijeras") ||
        (eleccionRulo === "papel" && eleccionAleatoria === "piedra") ||
        (eleccionRulo === "tijeras" && eleccionAleatoria === "papel")
    ) {
        alert("Me ganaste!")
        victorias++
    } else {
        alert("Te gane jaja!")
        derrotas++
    }
}

// funcion para ver como van los resultados en cosola, con alert solamente se pueden ver si se gano empato o perdio

function mostrarResultados() {

// mensaje de victorias    
    if (victorias == 0){
        console.log("No me ganaste nunca")
    } else if (victorias == 1) {
        console.log("Me ganaste una vez")
    } else {
        console.log("Me ganaste " + victorias + " veces")
    }
// mensaje de derrotas
    if (derrotas == 0){
        console.log("No perdiste nunca")
    } else if (derrotas == 1) {
        console.log("Perdiste una vez")
    } else {
        console.log("Perdiste " + derrotas + " veces")
    }
// mensaje de empates
    if (empates == 0){
        console.log("No empatamos nunca")
    } else if (empates == 1) {
        console.log("Empatamos una vez")
    } else {
        console.log("Empatamos " + empates + " veces")
    }
// cantidad de partidas jugadas    
    if (manosJugadas == 1) { 
        console.log("Jugamos solamente una mano")
    } else {
    console.log("Jugamos " + manosJugadas + " manos")
    }
}

// llamo las funciones
piedraPapelTijeras()
mostrarResultados()


