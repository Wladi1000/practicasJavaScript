// Ejemplo de la funcion Prompt y Number
// Cuando usamos Number en el Prompt, estamos transformado el string devuelto por prompt
// a un numero. Tambien podemos usar boolean y String

// let elNumero = Number(prompt("Elige un numero"));
// console.log("Tu número es la raiz cuadrada de " +
// elNumero * elNumero);
// alert("Tu número es la raiz cuadrada de " + elNumero * elNumero);

// Uso de condicionales

// let elNumero = Number(prompt("Elige un numero"));
// if (!Number.isNaN(elNumero)) {
// console.log("Tu número es la raiz cuadrada de " +
// elNumero * elNumero);
// } else {
// console.log("Ey. Por qué no me diste un número?");
// }

// Ciclos

// While
// let numero = 0;
// while (numero <= 12) {
// console.log(numero);
// numero = numero + 2;
// }

// Do While
// let tuNombre;
// do {
// tuNombre = prompt("Quien eres?");
// } while (!tuNombre);
// console.log(tuNombre);

// For
// for (let numero = 0; numero <= 12; numero = numero + 2) {
//     console.log(numero);
// }

// Break en ciclo
// for (let actual = 20; ; actual = actual + 1) {
//     if (actual % 7 == 0) {
//     console.log(actual);
//     break;
//     }
// }
// Usar el operador restante (%) es una manera fácil de probar si un número es
// divisible por otro número. Si lo es, el residuo de su división es cero.

// Condicional Switch
// switch (prompt("Como esta el clima?")) {
//     case "lluvioso":
    //     console.log("Recuerda salir con un paraguas.");
    //     break;
//     case "soleado":
//         console.log("Vistete con poca ropa.");
//     case "nublado":
//         console.log("Ve afuera.");
//         break;
//     default:
//     console.log("Tipo de clima desconocido!");
//     break;
// }