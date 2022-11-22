const express = require('express');

const {matematicas} = require('../data/cursos').infoCursos;

const routerMatematicas = express.Router();

routerMatematicas.get('/', (req, res) =>{
  res.send(JSON.stringify(matematicas));
});

routerMatematicas.get('/:tema', (req, res) =>{

  const tema = req.params.tema;
  const resultados = matematicas.filter((curso) => curso.tema === tema);

  if ( resultados.length === 0 ){
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  res.status(200).send(JSON.stringify(resultados));

});

// Si queremos asignarlo directamente a la constante lo que hay
// que hacer es omitir el nombre de la variable

// module.exports.routerMatematicas = routerMatematicas;
module.exports = routerMatematicas;