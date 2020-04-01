let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() { // O se puede tambien -> getNombre(){}
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
    }
}

//let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

// Destructuracion, podemos hacer lo mismo de arriba en una linea de codigo
// Si queremos que el nombre no se llame asi, sino diferente se pone :nombre
let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);