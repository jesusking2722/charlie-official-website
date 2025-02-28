import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import Container from "./layouts/Container";

function RoutesFile() {
  return (
    <>
      <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        </Container>
      </Router>
    </>
  )
}

export default RoutesFile
