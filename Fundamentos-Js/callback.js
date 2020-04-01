// Callback -> Funcion que se ejecuta despues de que algo sucede.

// Primero -> setTimeout
/* Recibe otra funcion que se ejecuta cuando se cumple 
 * la condicion del tiempo.
 */
setTimeout( () => {
    console.log('Hola mundo');
}, 1000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Mateo',
        id //id : id -> ES6 ya no es necesario hacer esa redundancia.
    }
}

