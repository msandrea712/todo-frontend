import {useEffect} from 'react'
import RootLayout from '../layouts/RootLayout'

function Home({baseURL}) {
  useEffect(function(){
    fetch(baseURL)
    .then(function(response){
return response.json()
    })
    .then(function(data){
      console.log (data)
    })
    .catch (function(error){
      console.log ("error fetching todos",error)
    })
  },[])
  return (
    <RootLayout>
      <main>
        
      </main>
    </RootLayout>
  )
}

export default Home