// const nombre = 'Marcos';
// const doc = 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference'
// console.log(`Hola, ${nombre}`);

import heroes, {owners} from "../data/heroes";

/**
 const tomarHeoresById = (id) =>{
    return heroes.find((heroes) => {
        if(heroes.id === id){
            return true;
        }else{
            return false;
        }
    });
};
**/
export const tomarHeoresById = (id) =>{
    return heroes.find(heroes => heroes.id === id);
};

// console.log(tomarHeoresById(2));

export const tomarHeroesByOwner = (owner) =>{
    return heroes.filter(heroes => heroes.owner === owner);
};

// console.log(tomarHeroesByOwner('DC'))
//console.log(owners)