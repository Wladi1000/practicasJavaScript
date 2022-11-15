const statusPedido = () =>{
  return Math.random() < 0.8;
};

const miPedidoPizza = new Promise((resolve, reject) =>{

  setTimeout(() => {
    statusPedido() ? resolve('Pedido exitoso! Pizza esta en camino'): reject('transaccion fallida. Intente de nuevo');
  }, 10);
});


// miPedidoPizza.then(manejarPedido, rechazarPedido);

// miPedidoPizza
//   .then((mensajeConfirmacion) => {
//     console.log(mensajeConfirmacion);
//   })
//   .cath((mensajeError) =>{   //Cambio de then a cath
//     console.log(mensajeError);
//   })

const manejarPedido = (mensajeConfirmacion) => {
  console.log(mensajeConfirmacion);
};

const rechazarPedido = (mensajeError) =>{
  console.log(mensajeError);
};

miPedidoPizza.then(manejarPedido).catch(rechazarPedido)