// Requirements
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar2');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limit)
            .then(resp => console.log(resp))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limit)
            .then(resp => console.log(`Created file: ${colors.green(resp)}`))
            // O bien:
            // .then(resp => console.log(`Created file: `, colors.green(resp)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Unknown command');
        break;
}