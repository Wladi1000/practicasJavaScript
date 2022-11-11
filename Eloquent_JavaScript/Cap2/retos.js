// Reto 1
// Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente
// triángulo:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// Solucion:
// let agregado = "";
// for (let i=1 ; i<=7; i++){
//     agregado += "#";
//     console.log(agregado+"\n")
// }

// Reto 2 
// FizzBuzz
// Escribe un programa que use console.log para imprimir todos los números de
// 1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz"
// en lugar del número, y para los números divisibles por 5 (y no 3), imprime
// "Buzz" en su lugar.
// Cuando tengas eso funcionando, modifica tu programa para imprimir "
// FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz"
// o "Buzz" para números divisibles por solo uno de ellos).
// (Esta es en realidad una pregunta de entrevista que se ha dicho elimina un
// porcentaje significativo de candidatos a programadores. Así que si la puedes
// resolver, tu valor en el mercado laboral acaba de subir).


// Solucion1:
// let numerito = 1;
// while (numerito<=100){
//     switch (true){
//     case (numerito%3 == 0):
//         console.log("Fizz");
//     case (numerito%5 == 0):
//         console.log("Buzz");
//     default:
//         console.log(numerito+'_')
// }
//     numerito ++;
// }

// Solucion2:
// let numerito = 1;
// while (numerito<=100){
//     switch (true){
//         case ((numerito%3 == 0) && (numerito%5 == 0)):
//             console.log("FizzBuzz");
//             break;
//         case (numerito%3 == 0):
//             console.log("Fizz");
//             break;
//         case (numerito%5 == 0):
//             console.log("Buzz");
//             break;
//         default:
//             console.log(numerito+'_')
// }
//     numerito ++;
// }

// Reto 3
// Tablero de ajedrez
// Escribe un programa que cree un string que represente una cuadrícula de 8 ×
// 8, usando caracteres de nueva línea para separar las líneas. En cada posición
// de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
// formar un tablero de ajedrez.
// Pasar este string a console.log debería mostrar algo como esto:
// #       #       #       #
//     #       #       #       #
// #       #       #       #
//     #       #       #       #
// #       #       #       #
//     #       #       #       #
// #       #       #       #
//     #       #       #       #
// Cuando tengas un programa que genere este patrón, define una vinculación
// tamaño = 8 y cambia el programa para que funcione con cualquier tamaño,
// dando como salida una cuadrícula con el alto y ancho dados.

let i= Number(prompt("Inserta el alto tendra tu tablero de ajedrez"));
let j= Number(prompt("Inserta el ancho tendra tu tablero de ajedrez"));
let tablero = "";
let cuadro = "#";

for(let aux1=0; aux1<i; aux1++){
    for(let aux2=0; aux2<j ; aux2++){
        tablero += cuadro;
        cuadro=="#"? cuadro="-":cuadro="#"
    }
    tablero += "\n";
    cuadro == "#"? cuadro="-":cuadro="#"
}

console.log(tablero);

