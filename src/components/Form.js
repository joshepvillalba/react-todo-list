import React, { useState } from 'react';
import '../style/form.css';
import { v4 as uuidv4 } from 'uuid';

export const Form = (props) => {


    const id = uuidv4();

    const [input, setinput] = useState('');

    const hlandleChange = (e) => {
        setinput(e.target.value);
    }

        const handletodo = (e) => {
            e.preventDefault();
            const data = { text: input, id: id, complete: false };
            props.addTodo(data);            
        }

  return (
    <div>
        <form onSubmit={ handletodo } className='todo-form'>
            <input className='todo-input' type='text' name='text' placeholder='Agregar tarea' onChange={hlandleChange}/>
            <button className='todo-button' type='submit'>Agregar</button>
        </form>
    </div>
  )
}
