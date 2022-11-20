const http = require('http');
const cursos = require('./cursos.js');

const servidor = http.createServer((req, res) =>{

  const {method} = req;

  switch (method) {
    case 'GET':
      return manejarSolicitudGet(req, res);
      break;
    case 'POST':
      return manejarSolicitudPOST(req, res);
      break;
    default:
      console.log(`El metodo usado no puede ser manejado por el servidor. Y el metodo es ${method}`);
      break;
  }

});

function manejarSolicitudGet(req, res){
  let path = req.url;

  console.log(res.statusCode);

  if ( path === '/' ){

    res.statusCode = 200;
    return res.end('Bienvenidos a mi primer servidor y API creado por Node.js');
  } else if( path === '/cursos' ){

    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos));
  }else if(path === '/cursos/programacion'){
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.programacion));
  }else if(path === '/cursos/matematicas'){
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.matematicas));
  }else{
    res.statusCode = 404;
    return res.end('El recurso solicitado no existe...');
  }
};

function manejarSolicitudPOST(req, res) {
  const path = req.url;
  
  if (path === '/cursos/programacion'){

    res.statusCode = 200;
    res.end('El servidor recibio una solicitud POST en programacion')
  }
}






// iniciar servidor
const PUERTO = 3000;
servidor.listen(PUERTO, ()=>{
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});