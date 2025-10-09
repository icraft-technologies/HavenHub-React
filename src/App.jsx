import React, { useEffect } from 'react'
// import './App.css'
import './assets/css/d070bd23c42ac1e3.css'
import './assets/css/ef3ce000ff06104d.css'
import './assets/css/fab660058e0ab945.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import js files
import './assets/chunks/4bd1b696-2a15fa4e2a753923.js'
import './assets/chunks/684-fc76cbb65c5c7ad3.js'
import './assets/chunks/main-app-af2c2e8863912cc9.js'
import './assets/chunks/992-3f6663496dd2ee4d.js'
import './assets/chunks/707-098e2d4b80b1c53b.js'
import './assets/chunks/695-caec47b8eed23508.js'
import './assets/chunks/app/layout-a04ef71d44aecc6d.js'
import './assets/chunks/app/page-a613701d9aa5f244.js'
import './assets/chunks/polyfills-42372ed130431b0a.js'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  useEffect(() => {
    AOS.init({
      // settings can be adjusted here
      once: true,
      duration: 600,
    })
  }, [])
  return (
    <>
      <Header />
      
      <Home />

      <Footer />
      
    </>
  )
}

export default App
