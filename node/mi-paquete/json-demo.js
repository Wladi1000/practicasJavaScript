// const curso = require('./curso.json')

// console.log( curso.esPublico );

let infoCurso = {
  "titulo": "Apende Node.js",
  "numVistas": 4564,
  "numLikes": 21123,
  "temas":[
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
};

// Objeto -> cadena de caracteres
// Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

// cadena de caracteres -> Objeto
let objetoCurso = JSON.parse(infoCursoJSON);

console.log(objetoCurso);
console.log(typeof objetoCurso);

console.log(objetoCurso.titulo);
