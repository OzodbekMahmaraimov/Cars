import React, { useState } from 'react';
import './navbar.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../images/logo.svg'
import { MdPlace } from "react-icons/md";
import { FaTelegramPlane, FaWhatsapp, FaUser } from "react-icons/fa";
import { IoCarSport, IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  const openMenu = () => setNavbar(!navbar);

  return (
    <section className='w-100'>
      <header className='nav-header w-100 position-fixed top-0 left-0'>
        {/* xl navbar */}
        <nav className='w-100 d-none d-xl-block'>
          <ul className='nav-items mx-auto py-3 d-flex justify-content-between align-items-center'>
            <li className='nav-item'><LazyLoadImage width={170} effect='blur' src={logo} alt='logo' /></li>
            <li className='nav-item d-flex'>
              <button className='nav-btn rounded-start text-uppercase py-2 px-3 px-xl-4 d-flex gap-2 justify-content-center align-items-center'><MdPlace color='#E3D293' />Москва</button>
              <button className='nav-btn rounded-end text-uppercase py-2 px-3 px-xl-4 d-flex gap-2 justify-content-center align-items-center'><MdPlace color='#5A5A5A' />Дубай</button>
            </li>
            {/* lg nav */}
            <li className='d-xll-none d-flex flex-column gap-2'>
              <li className='nav-item nav-text-item'>Подобрать авто</li>
              <li className='nav-item nav-text-item'>Условия</li>
            </li>
            <li className='d-flex d-xll-none flex-column gap-2'>
              <li className='nav-item nav-text-item'>Цены</li>
              <li className='nav-item nav-text-item'>О нас</li>
            </li>
            <li className='d-xll-none d-flex flex-column gap-2'>
              <li className='nav-item nav-text-item'>Подобрать авто</li>
              <li className='nav-item nav-text-item'>Условия</li>
            </li>
            <li className='nav-item d-block d-xll-none nav-text-item'>Контакты</li>
            {/* / lg nav */}

            {/* xl nav */}
            <li className='nav-item d-none d-xll-block nav-text-item'>Подобрать авто</li>
            <li className='nav-item d-none d-xll-block nav-text-item'>Условия</li>
            <li className='nav-item d-none d-xll-block nav-text-item'>Цены</li>
            <li className='nav-item d-none d-xll-block nav-text-item'>О нас</li>
            <li className='nav-item d-none d-xll-block nav-text-item'>Контакты</li>
            {/* / xl nav */}
            <li className='nav-item d-flex gap-2'><FaWhatsapp fontSize={20} color='#5d5d5d' /><FaTelegramPlane fontSize={20} color='#5d5d5d' /></li>
            <li className='nav-item nav-text-item nav-number'>+7 (499) 110-20-47</li>
            <li className='nav-item'><button className='nav-btn rounded-2 py-2 px-4 d-flex gap-2 justify-content-center align-items-center'>Заказать звонок</button></li>
            <li className='nav-item d-flex'>
              <button className='nav-btn rounded-circle p-3 d-flex gap-2 justify-content-center align-items-center'><IoCarSport /></button>
              <button className='nav-btn rounded-circle p-3 d-flex gap-2 justify-content-center align-items-center'><FaUser /></button>
            </li>
          </ul>
        </nav>
        {/* / xl navbar */}

        {/* sm navbar */}
        <div className='w-100 d-flex d-xl-none flex-column'>

          <div className='w-100 py-4 d-flex justify-content-around align-items-center'>
            <LazyLoadImage src={logo} alt='logo' effect='blur' className='logo-img' />
            <div className='d-flex gap-1'>
              <button className='nav-btn rounded-circle p-3 p-sm-4 d-flex gap-2 justify-content-center align-items-center'><IoCarSport /></button>
              <button className='nav-btn rounded-circle p-3 p-sm-4 d-flex gap-2 justify-content-center align-items-center'><FaUser /></button>
            </div>
            {navbar ? <IoMdClose onClick={openMenu} className='menu' color='white' /> :
              <IoMenu onClick={openMenu} className='menu' color='white' />
            }
          </div>

          <nav className={`w-100 nav-sm ${navbar ? "nav-visible" : "nav-hidden"}`}>
            <ul className='nav-items d-flex flex-column gap-3 p-0 px-2'>
              <li className='nav-item d-flex flex-column gap-2'>
                <button className='nav-btn rounded-start text-uppercase py-2 px-4 d-flex gap-2 justify-content-center align-items-center'><MdPlace color='#E3D293' />Москва</button>
                <button className='nav-btn rounded-end text-uppercase py-2 px-4 d-flex gap-2 justify-content-center align-items-center'><MdPlace color='#5A5A5A' />Дубай</button>
              </li>
              <li className='nav-item nav-text-item text-center'>Подобрать авто</li>
              <li className='nav-item nav-text-item text-center'>Условия</li>
              <li className='nav-item nav-text-item text-center'>Цены</li>
              <li className='nav-item nav-text-item text-center'>О нас</li>
              <li className='nav-item nav-text-item text-center'>Контакты</li>
              <li className='nav-item d-flex gap-2 mx-auto'><FaWhatsapp fontSize={30} color='#5d5d5d' /><FaTelegramPlane fontSize={30} color='#5d5d5d' /></li>
              <li className='nav-item nav-text-item text-center'>+7 (499) 110-20-47</li>
              <li className='nav-item'><button className='nav-btn w-100 rounded-2 py-2 px-5 d-flex gap-2 justify-content-center align-items-center'>Заказать звонок</button></li>
            </ul>
          </nav>
        </div>
        {/* / sm navbar */}
      </header>
    </section>
  )
}

export default Navbar