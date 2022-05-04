import React from 'react';
import '../style/todo.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Todo = ({ id, text, complete, completeTodo, deleteTodo }) => {
  return (
    <div className={ complete? 'todo-container complete': 'todo-container' }>
        <div className='text-todo' onClick={() => completeTodo(id)}>
            { text }
        </div>
        <div className='todo-icon-container' onClick={ () => deleteTodo(id) }>
            <AiOutlineCloseCircle  className='todo-icon'/>
        </div>
    </div>
  )
}
