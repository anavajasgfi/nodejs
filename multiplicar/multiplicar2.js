// Requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`The input value ${base} is not a number`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
};

// El valor por defecto también se puede indicar en la cabecera, en lugar de yargs:
// let listarTabla = (base, limit = 10) => {
let listarTabla = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('The input value "base" must be a number.'.red);
        } else {
            let resp = `base: ${base}, limit: ${limit}`.yellow;

            for (let i = 1; i <= limit; i++) {
                resp += `\n${base} * ${limit} = ${base * limit}`;
            }

            resolve(resp);
        }
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};