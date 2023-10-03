import React,{useState} from 'react'
import RootLayout from '../layouts/RootLayout'
import "../styles/newtodo.css"

function NewTodo() {
  const[newTodo,setNewTodo]=useState({
    title:"",
    completed: false
  })
  const[error,setError]=useState("")
  const minTitleLength=3
  const maxTitleLength=50
  const handleChange=(e)=>{
    const{name,value}=e.target
    setNewTodo({
      ...newTodo,
      [name]:value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
      if (newTodo.title.length<minTitleLength || newTodo.title.length>maxTitleLength){
        setError(`title must be between ${minTitleLength}and${maxTitleLength}characters`)
      } else{}
    
  }
  return (
    <RootLayout>
      <main className="new-todo-container">
        <h2>
          create new todo
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              todo title
              <input className="form-input" type="text" name="title" value={newTodo.title} onChange={handleChange}/>
            </label>
          </div>
          <div className="form-group">
            <label>
              completed
              <input classNAme="form-checkbox" type="checkbox" name="completed" value={newTodo.completed} onChange={()=>
              setNewTodo({...newTodo,completed:!newTodo.completed})}/>
            </label>
          </div>
          <button className="form-button" type="submit">
            create todo
          </button>
        </form>
        {error&&<p>{error}</p>}
      </main>
    </RootLayout>
  )
}

export default NewTodo