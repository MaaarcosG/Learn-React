import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '', 
        email: ''
    });

    const {name, email} = formState;

    useEffect(() => {
        //console.log('hey');
    }, []);

    useEffect(() => {
        //console.log('formState cambio');
    }, [formState]);

    useEffect(() => {
        //console.log('email cambio');
    }, [email]);

    const handlerInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };

    return (
    <>
        <h1>useEffect</h1>
        <hr/>
        <div className='form-group'>
            <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Ingrese su nombre'
                autoComplete='off'
                value={name}
                onChange={handlerInputChange}
            />
        </div>

        <div className='form-group'>
            <input
                type='text'
                name='email'
                className='form-control'
                placeholder='Ingrese su email'
                autoComplete='off'
                value={email}
                onChange={handlerInputChange}
            />
        </div>

        {name === '123' && <Message/>}
    </>
  );
};
