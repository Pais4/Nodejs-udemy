// Permiten ejecutar un trabajo sincrono o asincrono y despues de que se resuelva la tarea
// Realizar un trabajo en particular

let empleados = [
  {
    id: 1,
    nombre: "Mateo"
  },
  {
    id: 2,
    nombre: "Vanessa"
  },
  {
    id: 3,
    nombre: "Hernan"
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

// Definimos la promesa
let getEmpleadoById = id => {
  // Necesitamos retornar una promesa
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
      reject(`No existe un empleado con el ID ${id}`);
    } else {
      resolve(empleadoDB);
    }
  });
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find( salario => salario.id === empleado.id );

        if(!salarioDB){
            reject(`No se encontro un salario para el usuario ${empleado.nombre}`);
        }else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

// Utilizamos la promesa - dentro del then especificamos lo que es el resolve y el reject
// Especificamos el Resolve
// getEmpleadoById(3).then( empleado => {
//     console.log('Empleado de BD', empleado);

//     // Primera promesa normal
//     // getSalario(empleado).then( resp => {
//     //     console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
//     // }, (err) => {
//     //     // Para manejar la excepcion
//     //     console.log(err);
//     // });

// }, (err) => {
//     console.log(err);
// });

// Otra forma con promesas en cadena - Mucho mas sencilla.
getEmpleadoById(10).then( empleado => {
    return getSalario(empleado);
})
.then( resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
})
.catch(err => {
    console.log(err);
})
