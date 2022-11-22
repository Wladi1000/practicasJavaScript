const express = require('express');

const {programacion} = require('../data/cursos').infoCursos;

const routerProgramacion = express.Router();

routerProgramacion.get('/', (req, res) =>{
  res.send(JSON.stringify(programacion));
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

// Si queremos asignarlo directamente a la constante lo que hay
// que hacer es omitir el nombre de la variable

// module.exports.routerProgramacion = routerProgramacion;
module.exports = routerProgramacion;