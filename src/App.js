import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import  './style.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contacts/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App