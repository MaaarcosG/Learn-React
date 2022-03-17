// const nombre = 'Marcos';
// const doc = 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference'
// console.log(`Hola, ${nombre}`);

/** DESESTRUCTURANTE de Arreglos **/

const personaje = ['Goku', 'Veggeta', 'Trunks'];
const [, , p3] = personaje;


export const returnaArreglo = () =>{
    return ['ABC', 123];
};

const [letras, numeros] = returnaArreglo();

const usarState = (valor) => {
    return[valor, () => {console.log('Hola Mundo')}];
};
