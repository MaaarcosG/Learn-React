import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('Prueba en el metodo getSaudo, el cual retorna Hola Marcos', () => {
        const nombre = "Marcos";
        const saludo = getSaludo(nombre);
        expect(saludo).toBe(`Hola ${nombre}`)
    });

    test('Prueba retorna Hola Sergio si tienen parametros', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Sergio');
    })
});