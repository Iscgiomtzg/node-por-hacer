const colors = require('colors');
const { argv } = require('./config/yargs');
const { crear, listar, actualizar, borrar } = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];
switch(comando){
    case 'crear':
    let tarea = crear(argv.descripcion);
    break;
    case 'listar':
    let listado = listar();
    listado.map( data => {
        console.log('========================'.red);
        console.log(`${data.descripcion}`.green);
        console.log(`Estado: ${data.completado}`.green);
        console.log('========================'.red);
    });
    break;
    case 'actualizar':
    let actualizado = actualizar(argv.descripcion, argv.completado);
    break;
    case 'borrar':
    let eliminado = borrar(argv.descripcion);
    break;
    default:
    console.log('Comando no encontrado');
    break;
}