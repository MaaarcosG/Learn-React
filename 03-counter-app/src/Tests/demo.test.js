describe('Prueba en el archivo demo.test.js', () => { 
    test('debe de ser iguales los strings', () => {
    
        const mensaje = 'Hola Mundo';
        const mensaje2 = `Hola Mundo`;
        
        expect(mensaje).toBe(mensaje2);
    }); 
});
