import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Form from './components/Form'
import Board from './components/Board'
import './App.css';

function App() {
  
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [status, setStatus] = useState(['todo', 'doing', 'done'])
  const [count, setCount] = useState(0)
  // const [boards, setBoards] = useState([{status: 'todo', tasks: []}, {status: 'doing', tasks: []}, {status: 'done', tasks: []}])


  const update = (id, progress) => {
    const idx = todos.findIndex(todo => todo.id === id)
    const updated = Object.assign(todos[id],  {progress})
    setTodos([...todos.slice(0, idx), updated, ...todos.slice(idx + 1)])
  }

  const remove = (id) => {
    // const idx = todos.findIndex(todo => todo.id === id)
    // if (idx > -1 ) {
    //   setTodos(todos.splice(idx, 1))
    // }
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const appendTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, {id: count, title: todo, progress : 'todo'}])
    setCount(count + 1)
    setTodo('')
  }

  return (
    <div className="App">

      <>
      <Navbar />
      <br></br>
      </>

      <>
      <Form appendTodo={appendTodo} todo={todo} setTodo={setTodo} />
      </>

      <>
      <div className="row">
        <div className="column">
            {status.map((stat, i) => (
              <Board key={'stat' + i} stat={stat} remove={remove} update={update} todos={todos.filter(todo => todo.progress === stat)} />
          ))}
        </div>
      </div>
      </>
      
    </div>
  );
}

export default App;
