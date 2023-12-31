import React from 'react'
import Todo from './Todo'
function todolist({
    todos, toggleCompleted, deleteTodo
}) {
  return (
    <div>
        {
            todos.map(function(todo){
return <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
            })
        }
    </div>
  )
}

export default todolist