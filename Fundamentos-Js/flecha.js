// ------ EJEMPLO 1 -----------
// Funcion normal
// function suma(a, b){
//     return a + b;
// }

// Funcion flecha
let suma = (a, b) => {
    return a + b;
}

// Si el retorno es de una unica linea se puede escribir asi:
let sumaAct = (a, b) => a + b;

// ------ EJEMPLO 2 -----------
let saludar = () => 'Hola mundo';

// ------ EJEMPLO 3 -----------
// function saludo(nombre){
//     return `Hola ${nombre}`;
// }

// Si la funcion solo tiene un parametro se puede hacer asi:
// let saludo = nombre => {
//     return `Hola ${nombre}`;
// }

// Y como solo retorna una linea se puede simplificar asi:
let saludo = nombre => `Hola ${nombre}`;

// ------ EJEMPLO 4 -----------
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    // Aqui cambiamos la estructura de la funcion
    getNombre() {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
    }
}

console.log(suma(10, 20));
console.log(sumaAct(10, 20));
console.log(saludar());
console.log(saludo('Mateo'));
console.log(deadpool.getNombre());
