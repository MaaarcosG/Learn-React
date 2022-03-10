// const nombre = 'Marcos';
// const doc = 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference'
// console.log(`Hola, ${nombre}`);

import { tomarHeoresById } from "./bases/08-imp-ex";
 
 
 
const promesa = new Promise((resolve, reject) => {
 
    setTimeout(() => {
        const heroe = tomarHeoresById(2);
        resolve(heroe);
        // reject('No se pudo encontra el heroe')
    }, 2000);
 
});
 
promesa.then((heroe) => {
    console.log('Heroe', heroe)
}).catch(err => console.warn(err));