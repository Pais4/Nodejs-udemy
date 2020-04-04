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

    // Vamos a suponer un error
    if(id === 20){
        callback(`El usuario con id ${id} No existe`);
    } else{
        // Supongamos que ya fuimos a la base de datos, entonces ahora llamamos al Callback
        callback(null, usuario); // Retornamos el usuario de la base de datos
    }
    
}

getUsuarioById(10, (err, usuario) => {

    if(err){
        // El return es para que no se siga ejecutando el programa en caso de error.
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});


