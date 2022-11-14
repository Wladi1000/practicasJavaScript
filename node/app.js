// la variable no se llama igual porque el modulo retorna una clase
const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', () => {
  console.log('Se realizo una compra.');
});

emisorProductos.emit('compra');
