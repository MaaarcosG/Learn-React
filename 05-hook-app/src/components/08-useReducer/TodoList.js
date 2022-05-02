import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handlerDelete, handlerToggle}) => {
    return (
        <ul className='list-group list-group-flush'>
        {
            todos.map((todo, i) => (
                // TodoListItem, 
                <TodoListItem
                key={todo.id}
                todo={todo}
                i={i}
                handlerDelete={handlerDelete} 
                handlerToggle={handlerToggle}
                />
            ))
        }
        </ul>
    )
}
