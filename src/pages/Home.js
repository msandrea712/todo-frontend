import {useEffect} from 'react'
import RootLayout from '../layouts/RootLayout'
import TodoList from '../components/TodoList'

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
    <RootLayout>
      <main>
        <TodoList todos={todos}></TodoList>
      </main>
    </RootLayout>
  )
}

export default Home