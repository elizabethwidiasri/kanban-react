import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Form from './components/Form'
import Board from './components/Board'
import './App.css';

function App() {
  
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [status, setStatus] = useState(['todo', 'doing', 'done'])
  // const [boards, setBoards] = useState([{status: 'todo', tasks: []}, {status: 'doing', tasks: []}, {status: 'done', tasks: []}])


  const appendTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, {title: todo, progress : 'todo'}])
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
              <Board key={'stat' + i} stat={stat} todos={todos.filter(todo => todo.progress === stat)} />
          ))}
        </div>
      </div>
      </>
      
    </div>
  );
}

export default App;
