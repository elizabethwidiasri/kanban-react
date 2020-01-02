import React from 'react'

function Boards({stat, todos}) {
  return (
    <>
     <div className="card">
        <p>{stat}</p>
        {todos.map((todo, i) => (
          <p key={'todo' + i}>{todo.title}</p>
        ))}
      </div>
    </>
  )
}

export default Boards