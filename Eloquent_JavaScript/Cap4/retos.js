// Reto 1

// console.log(suma(rango(1, 10)));
// Escribe una función rango que tome dos argumentos, inicio y final, y
// retorne un array que contenga todos los números desde inicio hasta (e incluyendo) final.
// Luego, escribe una función suma que tome un array de números y retorne
// la suma de estos números. Ejecuta el programa de ejemplo y ve si realmente
// retorna 55.
// Como una misión extra, modifica tu función rango para tomar un tercer
// argumento opcional que indique el valor de “paso” utilizado para cuando construyas el array. Si no se da ningún paso, los elementos suben en incrementos
// de uno, correspondiedo al comportamiento anterior. La llamada a la función
// rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también
// funcione con valores de pasos negativos para que rango(5, 2, -1) produzca
// [5, 4, 3, 2].

// Solucion 1
// const rango = (inicio, final)=>{
//     let retorno = [];
//     let numeroEnPosicion = inicio;
//     let acumulador=0;

//     for(let i=0; numeroEnPosicion<=final; i++){
//         retorno.push(numeroEnPosicion);
//         acumulador += retorno[i];
//         numeroEnPosicion ++;
//     }
//     return acumulador;
// }

// console.log(rango(5,10));

// Solucion 2

// const rango = (inicio, final, incremento)=>{
//     let retorno = [];
//     let numeroEnPosicion = inicio;
//     let acumulador=0;

//     if (inicio<=final){
//         for(let i=0; numeroEnPosicion<=final; i++){
//             retorno.push(numeroEnPosicion);
//             acumulador += retorno[i];
    
//             (incremento==undefined)?numeroEnPosicion++ : numeroEnPosicion += incremento;
//         }
//     }else if(inicio>final){
//         for(let i=0; numeroEnPosicion>=final; i++){
//             retorno.push(numeroEnPosicion);
//             acumulador += retorno[i];
    
//             (incremento==undefined)?numeroEnPosicion-- : numeroEnPosicion += incremento;
//         }
//     }

//     console.log(retorno)
//     return acumulador;
// }

// console.log(rango(1,10,3));

// Reto 2

// Revirtiendo un array
// Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que aparecen sus elementos. Para este ejercicio, escribe dos funciones,
// revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma
// un array como argumento y produce un nuevo array que tiene los mismos elementos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo
// que hace el métodoreverse: modifica el array dado como argumento invirtiendo
// sus elementos. Ninguno de los dos puede usar el método reverse estándar.
// Pensando en las notas acerca de los efectos secundarios y las funciones puras
// en el capítulo anterior, qué variante esperas que sea útil en más situaciones?
// Cuál corre más rápido?

// Solucion 1

// const revertirArray = (arreglo) =>{
//     let arreglo2=[];

//     for (let i = arreglo.length-1 ; i>=0; i--){
//         arreglo2.push(arreglo[i]);
//     }

//     return arreglo2;
// }

// let prueba = [1,2,3,4,5,7,4,7,8,9,10];

// console.log(
//     revertirArray(prueba)
// )

// // solucion 2

// const revertirArrayEnSuLugar = (arreglo)=>{
//     let aux;
//     for (let i = arreglo.length-1, j=0 ; i<=j; i--, j++){
//         aux = arreglo[j];
//         arreglo[j] = arreglo[i];
//         arreglo[i] = aux;
//     }
// }

// let prueba = [1,2,3,4,5,7,4,7,8,9,10];

// console.log(
//     revertirArray(prueba)
// )

// Reto 3

// Escribe una función arrayALista que construya una estructura de lista como
// el que se muestra arriba cuando se le da [1, 2, 3] como argumento. También
// escribe una función listaAArray que produzca un array de una lista. Luego
// agrega una función de utilidad preceder, que tome un elemento y una lista y
// creé una nueva lista que agrega el elemento al frente de la lista de entrada, y
// posicion, que toma una lista y un número y retorne el elemento en la posición
// dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando
// no exista tal elemento.
// Si aún no lo has hecho, también escribe una versión recursiva de posicion.

// Es muy ladilla para hacerlo, ya pase por program 2 xd
// pero igual queda para el futuro realizarla

// Reto 4 

// Comparación profunda
// El operador == compara objetos por identidad. Pero a veces preferirias comparar los valores de sus propiedades reales.
// Escribe una función igualdadProfunda que toma dos valores y retorne true
// solo si tienen el mismo valor o son objetos con las mismas propiedades, donde
// los valores de las propiedades sean iguales cuando comparadas con una llamada
// recursiva a igualdadProfunda.
// Para saber si los valores deben ser comparados directamente (usa el operador
// == para eso) o si deben tener sus propiedades comparadas, puedes usar el
// operador typeof. Si produce "object" para ambos valores, deberías hacer una
// comparación profunda. Pero tienes que tomar una excepción tonta en cuenta:
// debido a un accidente histórico, typeof null también produce "object".
// La función Object.keys será útil para cuando necesites revisar las propiedades
// de los objetos para compararlos.
