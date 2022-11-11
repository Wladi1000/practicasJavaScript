// Definiendo una función
// Una definición de función es una vinculación regular donde el valor de la vinculación es una función. Por ejemplo, este código define cuadrado para referirse
// a una función que produce el cuadrado de un número dado:
// const cuadrado = function(x) {
// return x * x;
// };
// console.log(cuadrado( Number(prompt("Ingrese el numero")) ));
// → 144

// Una función es creada con una expresión que comienza con la palabra clave
// function (“función”). Las funciones tienen un conjunto de parámetros (en
// este caso, solo x) y un cuerpo, que contiene las declaraciones que deben ser
// 41
// ejecutadas cuando se llame a la función. El cuerpo de la función de una función
// creada de esta manera siempre debe estar envuelto en llaves, incluso cuando
// consista en una sola declaración.
// Una función puede tener múltiples parámetros o ningún parámetro en absoluto. En el siguiente ejemplo, hacerSonido no lista ningún nombre de parámetro,
// mientras que potencia enumera dos:
// const hacerSonido = function() {
// console.log("Pling!");
// };
// hacerSonido();
// // → Pling!
// const potencia = function(base, exponente) {
// let resultado = 1;
// for (let cuenta = 0; cuenta < exponente; cuenta++) {
// resultado *= base;
// }
// return resultado;
// };
// console.log(potencia(2, 10));
// → 1024

// Notación de declaración
// Hay una forma ligeramente más corta de crear una vinculación de función.
// Cuando la palabra clave function es usada al comienzo de una declaración,
// funciona de una manera diferente.
// function cuadrado(x) {
// return x * x;
// }
// Esta es una declaración de función. La declaración define la vinculación
// cuadrado y la apunta a la función dada. Esto es un poco mas facil de escribir,
// y no requiere un punto y coma después de la función.
// Hay una sutileza con esta forma de definir una función.
// console.log("El futuro dice:", futuro());
// function futuro() {
// return "Nunca tendran autos voladores";
// }

// Este código funciona, aunque la función esté definida debajo del código que
// lo usa. Las declaraciones de funciones no son parte del flujo de control regular
// de arriba hacia abajo. Estas son conceptualmente trasladadas a la cima de su
// alcance y pueden ser utilizadas por todo el código en ese alcance. Esto es a
// veces útil porque nos da la libertad de ordenar el código en una forma que nos
// parezca significativa, sin preocuparnos por tener que definir todas las funciones
// antes de que sean utilizadas.

// Funciones de flecha
// Existe una tercera notación para funciones, que se ve muy diferente de las otras.
// En lugar de la palabra clave function, usa una flecha (=>) compuesta de los
// caracteres igual y mayor que (no debe ser confundida con el operador igual o
// mayor que, que se escribe >=).
// const potencia = (base, exponente) => {
//      let resultado = 1;
//      for (let cuenta = 0; cuenta < exponente; cuenta++) {
//          resultado *= base;
//      }
//      return resultado;
// };

// Argumentos Opcionales
// El siguiente código está permitido y se ejecuta sin ningún problema:
// function cuadrado(x) { return x * x; }
// console.log(cuadrado(4, true, "erizo"));
// // → 16

// Definimos cuadrado con solo un parámetro. Sin embargo, cuando lo llamamos
// con tres, el lenguaje no se queja. Este ignora los argumentos extra y calcula el
// cuadrado del primero.
// JavaScript es de extremadamente mente-abierta sobre la cantidad de argumentos que puedes pasar a una función. Si pasa demasiados, los adicionales
// son ignorados. Si pasas muy pocos, a los parámetros faltantes se les asigna el
// valor undefined.