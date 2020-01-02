import React from 'react'


function Boards({stat, todos, remove}) {
  return (
    <>
     <div className="card">
        <p>{stat}</p>
        {todos.map((todo, i) => (
          <>
          <p key={'todo' + i}>{todo.title}</p>
        <button onClick={() => remove(todo.id)}>remove</button>
        </>
        ))}
      </div>
    </>
  )
}

export default Boards