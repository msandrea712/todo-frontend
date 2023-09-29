import React from 'react'
import Todo from './Todo'
function todolist({
    todos
}) {
  return (
    <div>
        {
            todos.map(function(todo){
return <Todo key={todo.id} todo={todo}/>
            })
        }
    </div>
  )
}

export default todolist