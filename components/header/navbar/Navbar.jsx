"use client"

import React, { useState, useEffect } from 'react'
import Logo from './navItems/Logo'
import NavMenu from './navItems/NavMenu'
import NavIcons from './navItems/NavIcons'



const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);
  return (
    <>
       <nav className={`${
      isSticky ? 'fixed top-0 z-50 w-full' : ''
    } w-full bg-white/[0.65]  z-50 hover:bg-white  fixed flex justify-around  py-2 text-slate-900 shadow-md items-center gap-3 md:gap-0 `}>
           <Logo />
          <NavMenu />
          <NavIcons />
      </nav>
    </>
  )
}

export default Navbar