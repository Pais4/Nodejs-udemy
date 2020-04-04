// Creamos un arreglo de objetos simulando una base de datos
let empleados = [
    {
        id: 1,
        nombre: 'Mateo'
    },
    {
        id: 2,
        nombre: 'Vanessa'
    },
    {
        id: 3,
        nombre: 'Hernan'
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleadoById = (id, callback) => {
    // let empleadoDB = empleados.find(empleado => {
    //     return empleado.id === id;
    // }) 
    // Como la funcion es de una sola linea, podriamos cambiarla asi:
    let empleadoDB = empleados.find( empleado => empleado.id === id);
    
    if( !empleadoDB ){
        callback(`No existe un empleado con el ID ${id}`);
    } else{
        // Mandamos NULL por que no hay ningun error
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find( salario => salario.id === empleado.id );

    if(!salarioDB){
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`)
    }else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

getEmpleadoById(3, (err, empleado) => {
    if( err){
        return console.log(err);
    }
    
    getSalario(empleado, (err, resp) => {
        if( err){
            return console.log(err);
        };
        console.log(`El salario de ${resp.nombre} Es de $ ${resp.salario}`)
    })
    
});