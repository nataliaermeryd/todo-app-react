import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [id, setId] = useState(0)
  const incrementCounter = () => {
    setId((previousValue) => previousValue + 1)
  }
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState([])
  const addTodo = () => {
    const newTodo = {
      id: id,
      title: title,
      description: description
    }
    setTodos([...todos, newTodo])
    incrementCounter()
    setTitle("")
    setDescription("")
  }

  const deleteTodo = (id) => {
    const filterTodos = todos.filter((todo) => todo.id != id)
    setTodos(filterTodos)
  }
    
  return (
    <div className="container">
      <div style={{display: 'flex'}}>
        <input className="fields" placeholder='Title' value={title} onChange={(event) => {
            console.log(event.target.value)
            setTitle(event.target.value)
        }} />
        <input className="fields" placeholder="Description" value={description} onChange={(event) => {
            console.log(event.target.value)
            setDescription(event.target.value)
        }} />
        <button onClick={addTodo}>+</button>
      </div>
      {todos.map(({id, title, description}) => {
        return <Todo key={id} id={id} title={title} description={description} onDelete={deleteTodo} />
      })}
    </div>
  );
}

export default App;