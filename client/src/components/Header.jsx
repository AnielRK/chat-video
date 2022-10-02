import React from 'react'
import logo from "../assets/anim.gif";

const Header = () => {
  return (
    <div className='px-8 py-4 shadow-md'>
        <div className="flex items-center">
            <img src={logo} className="w-8 h-8" alt="logo"/>
            <h1 className='text-xl'> E-resaka </h1>
        </div>
    </div>
  )
}

export default Header