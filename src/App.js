import React, {useState} from 'react';
// import Navbar from './components/Navbar'
// import Form from './components/Form'
// import Board from './components/Board'
import './App.css';

function App() {
  
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  // const [status, setStatus] = useState(['todo', 'doing', 'done'])
  // const [boards, setBoards] = useState([{status: 'todo', tasks: []}, {status: 'doing', tasks: []}, {status: 'done', tasks: []}])


  const appendTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, todo])
    setTodo('')
  }

  return (
    <div className="App">
      {/* <Navbar />
      <Form />
      <Board /> */}

      <>
      <h1>React Kanban</h1>
      <br></br>
      </>

      <>
      {/* <Form appendTodo={appendTodo} todo={todo} setTodo={setTodo} /> */}
      {/* {todos} */}
      <form onSubmit={appendTodo}>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)}></input>
        <input type="submit" value="add todo"></input>
      </form>
      </>

      <>
      <div className="row">
        <div className="column">

            {/* {status.map(stat => (
             <div className="card">
                <p>{stat}</p>
                {todos.map(todo => (
                  <p>{todo}</p>
                ))}
             </div>
          ))} */}

        
          <div className="card">
              <p>todo</p>
              {todos.map(todo => (
                <p>{todo}</p>
            ))}
          </div>

          <div className="card">
              <p>doing</p>
          </div>

          <div className="card">
              <p>done</p>
          </div>

        </div>
      </div>
      </>
      
    </div>
  );
}

export default App;
