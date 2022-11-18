const http = require('http');

const servidor = http.createServer((req, res)=>{
  // Proceso
  console.log('Solicitud nueva');
  res.end('Hola mundo');
});

const PUERTO = 3000;

servidor.listen(PUERTO, () =>{
  console.log(`El servidor esta escuchando http://localhost:${PUERTO}...`);
});