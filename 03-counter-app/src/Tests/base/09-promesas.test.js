import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesa', () => {
    test('getHeroeByIdAsync debe de retornar u heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heore => {
                expect(heore).toBe(heroes[0]);
                done();
            });
    });

    test('dbe de tener un error si no existe el heroe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el heroe')
                done();
            })
    });
});