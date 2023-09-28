import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../styles/rootlayout.css"

function RootLayout({children}) {
  return (
    <div className= "main-container">
        <header>
            <Navbar/>
        </header>
        {children}
        <Footer/>
    </div>
  )
}

export default RootLayout