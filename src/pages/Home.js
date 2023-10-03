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
  return (
    <RootLayout title="Todo App">
      <main className='home-container'>
        <TodoList todos={todos}></TodoList>
      </main>
    </RootLayout>
  )
}

export default Home