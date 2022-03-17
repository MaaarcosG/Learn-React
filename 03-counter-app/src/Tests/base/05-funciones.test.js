import '@testing-library/jest-dom';
import { getUser, getUserActive } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () =>{
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABCD123',
            username: 'EL_MAESTRO'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('getUserActive debe de retornar un objeto', () => {
        const nombre = 'Juan';
        const user = getUserActive(nombre);

        expect(user).toEqual({
            uid: 'ABCD123',
            username: nombre
        })

    });
});