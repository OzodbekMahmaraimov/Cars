import React from 'react'
import './ozodbek.css'
import Navbar from './Navbar/Navbar'
import Home from './home/Home'
import Buy from './buy/Buy'
import Loader from './loader/Loader'
import Title from './title/Title'
import Background1 from './background1/Background1'
import Cards from './cards/Cards'

const Ozodbek = () => {
  return (
    <>
    <Loader />
    <div className='w-100'>
      <Navbar />
      <Home />
      <Buy />
      <Title  />
      <Background1 />
      <Cards />
    </div>
    </>
  )
}

export default Ozodbek