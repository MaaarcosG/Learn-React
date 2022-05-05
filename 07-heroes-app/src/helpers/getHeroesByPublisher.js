import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

    const valuePublisher = ['DC Comics', 'Marvel Comics']

    if(!valuePublisher.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`)
    };

    return heroes.filter(hero => hero.publisher === publisher);
};