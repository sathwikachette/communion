import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Landing from './pages/landing/landing';
import Signup from './pages/auth/signup';
import Login from './pages/auth/login';
import About from './pages/navcomp/about';
import Contact from './pages/navcomp/contact';
import Events from './pages/navcomp/events';
import EventForm from './pages/navcomp/createevent';



function App() {

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/createevent" element={<EventForm />} />

        </Routes>
      </div>
    </Router>


  )
}

export default App
