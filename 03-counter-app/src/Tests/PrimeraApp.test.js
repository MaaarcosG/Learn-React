import React from 'react';
import {render} from '@testing-library/react'
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp/>>', () => {
    test('debe de mostrar el mensaje "Hola soy Marcos"', () => { 
        const saludo = 'Hola soy Marcos';
        const {getByText} = render(<PrimeraApp saludo={saludo}/>)
        expect(getByText(saludo)).toBeInTheDocument();
     });
});