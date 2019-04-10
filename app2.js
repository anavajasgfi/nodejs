// Requirements
const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 6;

crearArchivo(base)
    .then(archivo => console.log(`Created file: ${archivo}`))
    .catch(e => console.log(e));