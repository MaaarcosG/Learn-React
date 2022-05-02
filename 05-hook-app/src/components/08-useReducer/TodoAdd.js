import React from 'react'
import { UseForm } from '../../Hooks/UseForm';

export const TodoAdd = ({handlerAddTodo}) => {

    const [{description}, handlerInputChange, reset] = UseForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // evitar data vacia
        if(description.trim().length <= 1){
            return;
        };

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handlerAddTodo(newTodo);
        reset()
    };

    return (
        <>
          <h4>Agregar TODO</h4>
          <hr/>
            <form onSubmit={handleSubmit}>
                <input type='text' name='description' placeholder='aprender...' autoComplete='off' className='form-control' value={description} onChange={handlerInputChange}/>
                <button type='submit' className='btn btn-outline-primary mt-1 w-100'>Agregar</button>
            </form>  
        </>
    )
}
