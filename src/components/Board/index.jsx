import React from 'react'


function Boards({stat, todos, remove, update}) {
  return (
    <>
     <div className="card">
        <p>{stat}</p>
        {todos.map((todo, i) => (
          <div key={'todo' + i}>
            <p>{todo.title}</p>
            <div className="direction">

              {stat === 'todo' && (
                <div>
                  <button onClick={() => update(todo.id, 'doing')}>maju</button>
                </div>
              )}
            
              {stat === 'doing' && (
                <div>
                  <button onClick={() => update(todo.id, 'todo')}>mundur</button> | <button onClick={() => update(todo.id, 'done')}>maju</button>
                </div>
              )}

              {stat === 'done' && (
                <div>
                  <button onClick={() => update(todo.id, 'doing')}>mundur</button>
                </div>
              )}
            </div>
          <button onClick={() => remove(todo.id)}>remove</button>
        </div>
        ))}
      </div>
    </>
  )
}

export default Boards