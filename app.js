// Requireds
const fs = require('fs'); // -> Required de un proyecto propio de NodeJS
// const fs = require('express'); -> Required de librerías que no es propia de NodeJS. Es un paquete que se instala y se utiliza posteriormente. No es un paquete nativo de NodeJS.
// const fs = require('./fs'); -> Required de archivos que nosotros creamos en el proyecto.
// const fs = require('../fs'); -> Required de archivos que nosotros creamos en el proyecto.

for (let base = 1; base <= 10; base++) {
    let data = '';

    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
        console.log(`The file tabla-${base}.txt has been saved!`);
    });
}