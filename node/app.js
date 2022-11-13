const fs = require('fs');
// const { TextEncoderStream } = require('node:stream/web');

// fs.readFile('index.html', 'utf-8', (err, contenido) => {
//   if (err){
//     // console.log(err);
//     throw err;
//   }else{
//     console.log(contenido);
//   }
//   console.log('Mensaje...')
// });

// fs.rename('./juan.html', 'index.html', (err)=>{
//   if (err){
//     console.log('no se realizo el cambio')
//     throw TextEncoderStream;
//   }
//   console.log('cambio exitoso');
// })

// fs.unlink('./main.html', (err) =>{
//   if (err){
//     throw err;
//   }
//   console.log('Eliminado con exito');
// })

// for ( i = 1; i<100000; i++) {

//   fs.appendFileSync('./virus.txt', i + ' soy un gusano \n', (err)=>{
//     if (err){
//       throw err
//     }
//     console.log(`virus ejecutandose ${i}`);
//   });
// };