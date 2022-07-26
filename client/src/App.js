import './App.css'
import { useState } from 'react'
import Nav from './components/Nav'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Cities from './components/Cities'
import CityForm from './components/CityForm'
import CityDetails from './components/CitiesDetails'
import UpdateCity from './components/UpdateCity'
import Comments from './components/Comments'
const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Cities" element={<Cities />}></Route>
        <Route path="/Cities/:id" element={<CityDetails />}></Route>
        <Route path="/CityForm" element={<CityForm />}></Route>
        <Route path="/UpdateCity" element={<UpdateCity />}></Route>
        <Route path="/Comments" element={<Comments />}></Route>
      </Routes>
    </div>
  )
}

export default App
