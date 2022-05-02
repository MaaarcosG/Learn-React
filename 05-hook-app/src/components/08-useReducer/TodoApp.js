import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css'

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    const handlerDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    };

    const handlerToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    };

    const handlerAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    };

    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={todos}
                        handlerDelete={handlerDelete}
                        handlerToggle={handlerToggle}
                    />
                </div>

                <div className='col-5'>
                    <TodoAdd
                        handlerAddTodo={handlerAddTodo}
                    />
                </div>
            </div>
        </div>
  )
}
