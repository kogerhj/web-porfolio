import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import About from "./Components/About.jsx";
import Contacts from "./Components/Contacts.jsx";
import Navbar from "./Components/Navbar.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Home from "./Components/Home.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar/>
      <About/>
      <Home />
      <Contacts/>
      <Projects />
      <Skills />
      <Testimonials />
  </React.StrictMode>,
)
