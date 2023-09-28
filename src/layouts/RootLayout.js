import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function RootLayout({children}) {
  return (
    <div>
        <header>
            <Navbar/>
        </header>
        {children}
        <Footer/>
    </div>
  )
}

export default RootLayout