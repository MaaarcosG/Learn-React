import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp/>>', () => {
    {/*
    test('debe de mostrar el mensaje "Hola soy Marcos"', () => { 
        const saludo = 'Hola soy Marcos';
        const {getByText} = render(<PrimeraApp saludo={saludo}/>)
        expect(getByText(saludo)).toBeInTheDocument();
     }); */}
    
    test('debe de mostrar <PrimeraApp/> correctamente', () => { 
        const saludo = 'Hola soy Marcos'
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtituo enviado por props', () => { 
        const saludo = 'Hola soy Marcos'
        const sub = 'Soy un subtitulo'
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo} 
                subtitulo={sub}
            />
        );
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(sub);

       });
});