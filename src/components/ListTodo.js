import React, { useState } from 'react';
import { Form } from '../components/Form';
import '../style/todo-list.css';
import { Todo } from '../components/Todo';

export const ListTodo = () => {

    // useEffect(() => {

    // }, [todos])
    

    const [todos, setTodos] = useState([]);

    const addTodo = (data) =>{

        if(data.text.trim()){
            setTodos([ data, ...todos ]);
        }

    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    const completeTodo = (id) => {
        const newTodo = todos.map(todo => {if (todo.id === id){ todo.complete = !todo.complete } return todo });
        setTodos(newTodo);
    }

  return (
    <>
        <Form addTodo={addTodo}/>
        <div className='todo-list-container'>
            {
                todos.map( (todo) => <Todo text = {todo.text} complete = {todo.complete} key={todo.id} id={todo.id} deleteTodo={deleteTodo} completeTodo={completeTodo} />)
            }
        </div>
    </>
  )
}
