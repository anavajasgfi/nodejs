// Requireds
const fs = require('fs');

// Primera forma de hacerlo:
// module.exports.crearArchivo = (base) => {
//     let data = '';

//     for (let i = 1; i <= 10; i++) {
//         data += `${base} * ${i} = ${base * i}\n`;
//     }

//     fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//         if (err)
//             reject(err)
//         else
//             resolve(`tabla-${base}.txt`);
//     });
// };

// Segunda forma de hacerlo:
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`The input value ${base} is not a number`);
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    })
};

module.exports = {
    crearArchivo
};

// De tener más funciones:
// module.exports = {
//     funcion1,
//     funcion2,
//     funcion3,
//     funcion4
// }