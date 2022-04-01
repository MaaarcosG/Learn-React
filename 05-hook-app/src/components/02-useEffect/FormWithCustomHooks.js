import React, { useEffect } from 'react'
import { UseForm } from '../../Hooks/UseForm';
import './effect.css'

export const FormWithCustomHooks = () => {

    const [formValues, handlerInputChange] = UseForm({
        name: '', 
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('email cambio')
    }, [email])
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
    };

    return (
    <form onSubmit={handleSubmit}>
        <h1>FormWithCustomHooks</h1>
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

        <div className='form-group'>
            <input
                type='password'
                name='password'
                className='form-control'
                placeholder='*****'
                value={password}
                onChange={handlerInputChange}
            />
        </div>

        <button type='submit' className='btn btn-primary'>
            Guardar
        </button>
    </form>
  );
};
