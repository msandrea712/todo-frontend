import React from 'react'
import RootLayout from '../layouts/RootLayout'
import "../styles/newtodo.css"

function NewTodo() {
  return (
    <RootLayout>
      <main className="new-todo-container">
        <h2>
          create new todo
        </h2>
        <form>
          <div className="form-group">
            <label className="form-label">
              todo title
              <input className="form-input" type="text"/>
            </label>
          </div>
          <div className="form-group">
            <label>
              completed
              <input classNAme="form-checkbox" type="checkbox"/>
            </label>
          </div>
          <button className="form-button" type="submit">
            create todo
          </button>
        </form>
      </main>
    </RootLayout>
  )
}

export default NewTodo