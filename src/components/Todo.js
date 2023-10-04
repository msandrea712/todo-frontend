import React from 'react'
import Check from '@mui/icons-material/Check'
import Delete from '@mui/icons-material/Delete'
import "../styles/todo.css"
function Todo({
    todo, toggleCompleted, deleteTodo
}) {
  const handleToggleCompleted=()=>{
    toggleCompleted(todo.id)
  }
  const handleDeleteTodo=()=>{
    deleteTodo(todo.id)
  }
  return (
    <div className={`todo-item ${todo.completed?"completed":""}`}>
        <h3>
            {
                todo.title
            }
        </h3>
        <div className="todo-actions">
          <Check onClick={handleToggleCompleted}/>
          <Delete onClick={handleDeleteTodo}/>
        </div>
    </div>
  )
}

export default Todo