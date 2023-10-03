import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../styles/rootlayout.css"

function RootLayout({children,title}) {
  return (
    <div className= "main-container">
        <header>
            <Navbar/>
            <h1>
              {title}
            </h1>
        </header>
        {children}
        <Footer/>
    </div>
  )
}

export default RootLayout