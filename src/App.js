import './App.css';
import { ListTodo } from './components/ListTodo';

function App() {

  return (
    <div className="App">
      
      <div className='logo'>
        <h1> To-Do App </h1>
      </div>
      
      <div className='list-todo'>
        <h2>Mis tareas</h2>
        <ListTodo />
      </div>

    </div>
  );
}

export default App;
