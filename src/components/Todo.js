import React from 'react'
import Check from '@mui/icons-material/Check'
import Delete from '@mui/icons-material/Delete'
import "../styles/todo.css"
function Todo({
    todo
}) {
  return (
    <div className={`todo-item ${todo.completed?"completed":""}`}>
        <h3>
            {
                todo.title
            }
        </h3>
        <div className="todo-actions">
          <Check/>
          <Delete/>
        </div>
    </div>
  )
}

export default Todo