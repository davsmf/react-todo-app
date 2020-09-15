import React from 'react'
import Todo from './Todo.js';

export default function TodoList({ todos, setTodos, filteredTodos }) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo todos={todos}
                          todo={todo}
                          setTodos={setTodos} 
                          key={todo.id} 
                          task={todo.task}/>
                ))}
            </ul>
        </div>
    )
}
 