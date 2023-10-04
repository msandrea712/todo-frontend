import React from 'react'
import Todo from './Todo'
function todolist({
    todos, toggleCompleted
}) {
  return (
    <div>
        {
            todos.map(function(todo){
return <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted}/>
            })
        }
    </div>
  )
}

export default todolist