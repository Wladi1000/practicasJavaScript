// La promesa retorna una cadena
const ordenarProducto = (producto) =>{

  return new Promise ( (resolve, reject) =>{

    console.log(`Ordenado: ${producto} de freeCodeCamp.`)
    setTimeout(() => {
      producto === 'taza'? resolve('Ordenando una taza con el logo de freeCodeCamp...'): reject('Este producto no esta disponible actualmente.');
    
    }, 2000);
  } );
}
// Usa la abreviacion clg para invocar un console.log
const procesarPedido = (respuesta)=>{
  // 
  // Si una funcion flecha recibe un parametro no es necvesario
  // rodearlo entre parentesis, pero lo hago por buena practica
  // 
  return new Promise((resolve) => {

    console.log('Procesando respuesta...');
    console.log(`La respuesta fue "${respuesta}"`);
    setTimeout(() => {
      resolve('Gracias por su compra. Disfruta tu producto de freeCodeCamp');
    }, 4000);
  });
};

// Anidar promesas asegura que se ejecuten una despues de otra, si se deja
// cada una de forma independeinte no se asegura que una se haga despues
// de la otra.
ordenarProducto('lapiz')
  .then(respuesta =>{
    console.log('Respuesta recibida');
    console.log(respuesta);

    return procesarPedido(respuesta); // Esta llamada retorna una promesa
  })
  .then((respuestaProcesada)=>{
    console.log(respuestaProcesada);
  })
  .catch((err)=>{
    console.log(err);
  });