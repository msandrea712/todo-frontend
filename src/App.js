import './App.css';
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NewTodo from "./pages/NewTodo"
import NotFound from "./pages/NotFound"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Footer/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} /> 
      <Route path="/newtodo" element={<NewTodo/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
