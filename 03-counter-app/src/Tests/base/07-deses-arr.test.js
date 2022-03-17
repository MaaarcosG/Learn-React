import '@testing-library/jest-dom';
import { returnaArreglo } from "../../base/07-deses-arr";

describe('prueba en destructuracion', () => {
    test('debe de retornar un string y un numero', () => {
        const [letras, numeros] = returnaArreglo();

        //expect(arr).toEqual(['ABC', 123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    });
});