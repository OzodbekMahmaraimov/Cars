import React from 'react'
import './ozodbek.css'
import Navbar from './Navbar/Navbar'
import Home from './home/Home'
import Buy from './buy/Buy'
import Loader from './loader/Loader'
import Title from './title/Title'

const Ozodbek = () => {
  return (
    <>
    <Loader />
    <div className='w-100'>
      <Navbar />
      <Home />
      <Buy />
      <Title  />
    </div>
    </>
  )
}

export default Ozodbek