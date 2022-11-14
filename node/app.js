// la variable no se llama igual porque el modulo retorna una clase
const EventEmitter = require('events');

const emisorProductos = new EventEmitter();


emisorProductos.on('compra', (total) => {
  console.log(`Se realizo una compra por $${total}`);
});

emisorProductos.emit('compra', 500);
