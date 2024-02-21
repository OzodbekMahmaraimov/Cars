import React from 'react'
import Usuli from './Nash usuli/Usul';
import Straxovka from './Strahovka/Strahovka';
import './Asilbek.css'
import Dubay from './Dubai/Dubay';
import Register from './Register/Register';
import Footer from './Footer/Footer';
const Asilbek = () => {
  return (
    <div className='w-100  Body'>
      <>
      <Usuli/>
      <Straxovka/>
      <Dubay/>
      <Register/>
      <Footer/>
    </>
    </div>
  )
}

export default Asilbek;