import {useEffect} from 'react'
import RootLayout from '../layouts/RootLayout'
import TodoList from '../components/TodoList'
import "../styles/home.css"
function Home({baseURL,todos,setTodos}) {
  useEffect(function(){
    fetch(baseURL)
    .then(function(response){
return response.json()
    })
    .then(function(data){
    setTodos(data)
    })
    .catch (function(error){
      console.log ("error fetching todos",error)
    })
  },[])
  const toggleCompleted=(id)=>{
    const updatedTodos=todos.map(function(todo){
     return todo.id===id?{...todo,completed: !todo.completed}:todo
    })
    setTodos(updatedTodos)
    fetch(baseURL+"/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !todos.find((todo) => todo.id === id).completed,
      }),
    })
    .then(function(response){
      return response.json()
    })
    .catch(function(error){
      console.log ("error updated todo",error)
    })
  }
  const deleteTodo=(id)=>{
  const updatedTodos=todos.filter(function(todo){
    return todo.id!==id
  })
  setTodos(updatedTodos)
  fetch(baseURL+"/"+id,{
    method: "DELETE"
  })
  .then(function(response){
    if(!response.ok){
      throw new Error("failed to delete todo")
    }
  })
  .catch(function(error){
    console.log ("error deleted todo",error)
  })
  }
  return (
    <RootLayout title="Todo App">
      <main className='home-container'>
        <TodoList todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}></TodoList>
      </main>
    </RootLayout>
  )
}

export default Home