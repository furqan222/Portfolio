import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiHealthBookFill} from 'react-icons/ri'
import {RiServiceFill} from 'react-icons/ri'
import {MdContactMail} from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
  const[activeNav, setactiveNav]=useState('#')
  return (
   <nav>
    <a href='#' onClick={()=>setactiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome /></a>
    <a href='#about' onClick={()=>setactiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser /></a>
    <a href='#experience' onClick={()=>setactiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><RiHealthBookFill /></a>
    <a href='#services' onClick={()=>setactiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><RiServiceFill /></a>
    <a href='#contact' onClick={()=>setactiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><MdContactMail /></a>
   </nav>
  )
}

export default Nav
