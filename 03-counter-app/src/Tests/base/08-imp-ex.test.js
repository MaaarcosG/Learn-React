import { tomarHeoresById, tomarHeroesByOwner } from "../../base/08-imp-ex";
import heroes from "../../data/heroes";

describe('pruebas en funciones de heroes', () => {
    test('debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = tomarHeoresById(id);
        
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    });

    test('debe de retornar undefine si heroe no existe', () => {
        const id = 10;
        const heroe = tomarHeoresById(id);

        expect(heroe).toBe(undefined);
    });

    test('debe de retornar un arreglo con los erroes de DC', () => {
        const owner = 'DC';
        const heroes = tomarHeroesByOwner(owner);
        
        const heroeData = heroes.filter(h => h.owner === owner);
        expect(heroes).toEqual(heroeData);
    });

    test('debe de retornar', () => {
        const owner = 'Marvel';
        const heroes = tomarHeroesByOwner(owner);

        expect(heroes.length).toEqual(2)
    });
});