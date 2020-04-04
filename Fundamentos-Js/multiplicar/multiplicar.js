const fs = require('fs');

let crearArchivo = (number) => {

    return new Promise((resolve, reject) => {

        // Comprobamos si es un numero
        if(!Number(number)){
            reject(`El valor introducido ${number} No es un numero`);
            return;
        }

        let data = '';

        for (let i = 0; i <= 10; i++) {
            data += `${number} * ${i} = ${number * i}\n`;
        }

        fs.writeFile(`../tablas/tabla-${number}`, data, (err) => {

            if (err) 
                reject (err)
            else 
                resolve(`tabla-${number}.txt`)
        
        });
    })
}

module.exports = {
    crearArchivo
}

