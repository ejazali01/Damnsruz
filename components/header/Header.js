"use client"

import React from 'react';
import NotificationBar from './notification/NotificationBar';
import Navbar from './navbar/Navbar';

const Header = () => {

  return (
    <div className=' max-w-full bg-white border-b-[1px] mx-auto xl:max-w-full lg:max-w-full md:max-w-full  '>      
     {<NotificationBar />}
      <Navbar  />     
    </div>

  )
}

export default Header