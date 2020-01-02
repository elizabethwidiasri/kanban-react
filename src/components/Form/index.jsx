import React from 'react'

function Form({appendTodo, todo, setTodo}) {
  return (
    <>
     <form onSubmit={appendTodo}>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)}></input>
        <input type="submit" value="add todo"></input>
      </form>
    </>
  )
}

export default Form