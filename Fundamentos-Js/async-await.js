/* 
 * Async Await
*/

// Esto es lo mismo que lo que tenemos abajo
let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Fernando');
        }, 3000)

    });
}

// El await tiene que estar dentro de una funcion async
let saludo = async () => {
    // Podemos ejecutar la promesa, esperar el resultado y este resultado almacenarlo en
    // una variable y utilizar la variable.
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

// Cualquier error que genere esta funcion, automaticamente inicializara el catch
// let getNombre = async() => {
//     return 'Mateo';
// };

saludo().then(mensaje => {
    console.log(mensaje);
})