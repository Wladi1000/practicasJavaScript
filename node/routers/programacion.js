const express = require('express');
const { infoCursos } = require('../data/cursos');

const {programacion} = require('../data/cursos').infoCursos;

const routerProgramacion = express.Router();

// Middleware
routerProgramacion.use(express.json());
// ---------------------------------------

routerProgramacion.get('/', (req, res) =>{
  res.json(programacion);
});

routerProgramacion.get('/:lenguaje', (req, res) =>{
  
  const lenguaje = req.params.lenguaje;
  const resultados =  programacion.filter((curso) => curso.lenguaje === lenguaje);

  if ( resultados.length === 0 ){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  // console.log(req.query.ordenar);

  if ( req.query.ordenar === 'vistas' ) {
    return res.send( JSON.stringify( resultados.sort( (a, b) => a.vistas - b.vistas ) ) );
  }

  res.status(200).json(resultados);

});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {

  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultados = infoCursos.programacion.filter( (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel);

  if ( resultados.length === 0 ){
    // respuesta con cuerpo
    return res.status(204).send(`No se encontraron cursos de ${lenguaje} de ${nivel}`);

    // respuesta vacia
    // return res.status(404).end();

  }

  res.status(200).json(resultados);

});


// Añadir
routerProgramacion.post('/', (req, res) => {

  let cursoNuevo = req.body;

  programacion.push(cursoNuevo);
  
  rjson(programacion);

});

// Actualizar un objeto completo
routerProgramacion.put('/:id', (req, res) =>{

  const cursoActualizado = req.body;

  const id = req.params.id;

  const indice = programacion.findIndex( (curso) => curso.id == id);

  if ( indice >= 0 ){
    programacion[indice]= cursoActualizado;
  }

  res.json(programacion);
});


// Actualizar propiedades especificas de un objeto
routerProgramacion.patch('/:id', (req, res) =>{

  const infoActualizada = req.body;
  
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if ( indice >= 0 ){
    const cursoModificar = programacion[indice];

    Object.assign(cursoModificar, infoActualizada);
  }
  res.json(programacion);
});


// Elinimar un curso del arreglo de cursos
routerProgramacion.delete('/:id', (req, res) =>{

  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id)

  if ( indice >=0 ){
    programacion.splice(indice, 1);
  }

  res.json(programacion);
});

// Si queremos asignarlo directamente a la constante lo que hay
// que hacer es omitir el nombre de la variable

// module.exports.routerProgramacion = routerProgramacion;
module.exports = routerProgramacion;