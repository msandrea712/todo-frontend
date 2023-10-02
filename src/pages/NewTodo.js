import React from 'react'
import RootLayout from '../layouts/RootLayout'

function NewTodo() {
  return (
    <RootLayout>
      <main>
        <h2>
          create new todo
        </h2>
        <form>
          <div>
            <label>
              todo title
              <input/>
            </label>
          </div>
          <div>
            <label>
              completed
              <input/>
            </label>
          </div>
          <button type="submit">
            create todo
          </button>
        </form>
      </main>
    </RootLayout>
  )
}

export default NewTodo