import React from 'react'
import Check from '@mui/icons-material/Check'
import Delete from '@mui/icons-material/Delete'
function Todo({
    todo
}) {
  return (
    <div>
        <h3>
            {
                todo.title
            }
        </h3>
        <div>
          <Check/>
          <Delete/>
        </div>
    </div>
  )
}

export default Todo