// Lo podemos hacer asi
// const multiplicar = require('../multiplicar/multiplicar');
// multiplicar.crearArchivo

// Pero gracias a la destructuracion
const { crearArchivo } = require('../multiplicar/multiplicar');

let number = '7';

crearArchivo(number)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(e => console.log('Error, ', e));