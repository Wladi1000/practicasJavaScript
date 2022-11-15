const statusPedido = () =>{
  return Math.random() < 0.8;
};

const miPedidoPizza = new Promise((resolve, reject) =>{

  setTimeout(() => {
    statusPedido() ? resolve('Pedido exitoso! Pizza esta en camino'): reject('transaccion fallida. Intente de nuevo');
  }, 3000);
});


const manejarPedido = (mensajeConfirmacion) => {
  console.log(mensajeConfirmacion);
};

const rechazarPedido = (mensajeError) =>{
  console.log(mensajeError);
};

miPedidoPizza.then(manejarPedido, rechazarPedido);