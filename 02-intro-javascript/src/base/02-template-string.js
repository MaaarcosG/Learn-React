const nombre = 'Marcos';
const second_name = 'Gutierrez';

const complete = `${ nombre } ${ second_name }`;

console.log(complete)

function getSaludo(nombre){
    return `Hola ${nombre}`
}

console.log(`Este es un texto: ${getSaludo(complete)}`)