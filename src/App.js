import './App.css';
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NewTodo from "./pages/NewTodo"
import NotFound from "./pages/NotFound"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {useState} from 'react'
function App() {
  const baseURL="http://localhost:3001/todos"
  const [todos,setTodos]=useState([])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home baseURL={baseURL} todos={todos} setTodos={setTodos}/>}/>
      <Route path="/about" element={<About/>} /> 
      <Route path="/newtodo" element={<NewTodo/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
