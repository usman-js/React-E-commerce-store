import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Banner from './components/Banner'
import NewArrival from './components/Newarrival'
import Topseller from './components/Topseller'
import Browse from './components/browse'
import './App.css'


function App() {
  return(
  <div>
      <Header />
      <Hero />
      <Banner />
      <NewArrival />
      <Topseller />
       <Browse />
  </div>
)}

export default App
