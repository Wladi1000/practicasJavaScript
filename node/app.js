const express = require('express');
const app = express();

const {infoCursos} = require('./cursos.js'); 

// Routers

const routerProgramacion = express.Router();
app.use('/api/cursos/programacion', routerProgramacion);

// -----------------------------------------------------

app.get('/', (req, res)=>{
  res.send('mi primer servidor con Express. Cursos ♥')
});

app.get('/api/cursos', (req, res) =>{
  res.send(JSON.stringify(infoCursos));
});

// Cursos de Programacion

routerProgramacion.get('/', (req, res) =>{
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) =>{
  
  const lenguaje = req.params.lenguaje;
  const resultados =  infoCursos.programacion.filter((curso) => curso.lenguaje === lenguaje);

  if ( resultados.length === 0 ){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  // console.log(req.query.ordenar);

  if ( req.query.ordenar === 'vistas' ) {
    return res.send( JSON.stringify( resultados.sort( (a, b) => a.vistas - b.vistas ) ) );
  }

  res.status(200).send(JSON.stringify(resultados));

});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {

  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultados = infoCursos.programacion.filter( (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel);

  if ( resultados.length === 0 ){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} de ${nivel}`);
  }

  res.status(200).send(JSON.stringify(resultados));

});



// Cursos de Matematicas

app.get('/api/cursos/matematicas', (req, res) =>{
  res.send(JSON.stringify(infoCursos.matematicas));
});

app.get('/api/cursos/matematicas/:tema', (req, res) =>{

  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter((curso) => curso.tema === tema);

  if ( resultados.length === 0 ){
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  res.status(200).send(JSON.stringify(resultados));

});



// ------------------------------------------------------

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, ()=>{
  console.log(`Escuchando en el puerto ${PUERTO}...`);
});