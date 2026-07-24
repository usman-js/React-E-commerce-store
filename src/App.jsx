import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Banner from './components/Banner'
import NewArrival from './components/Newarrival'
import Topseller from './components/Topseller'
import Browse from './components/browse'
import Reviews from './components/Reviews'
import Signup from './components/Signup'
import Footer from './components/Footer'
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
      <Reviews />
      <Signup />
      <Footer />
  </div>
)}

export default App
