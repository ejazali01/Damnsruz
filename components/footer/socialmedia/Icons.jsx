"use client"

import React from 'react'
import Link from 'next/link';
import {BsInstagram} from 'react-icons/bs';
import {RiFacebookFill} from 'react-icons/ri';
import {BsYoutube} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io'


const Icons = () => {
  return (
    <>
    
        <div className='flex justify-center gap-4 font-medium text-xl items-center'>
            <Link href='https://www.instagram.com/damnsruz/' className='hover:scale-150 transition duration-150'> <BsInstagram /> </Link>
            <Link href='https://www.facebook.com/profile.php?id=100088920337727' className='hover:scale-150 transition duration-150'> <RiFacebookFill /> </Link>
            <Link href='https://youtube.com/@damnsurz' className='hover:scale-150 transition duration-150'> <BsYoutube /> </Link>
            <Link href='https://api.whatsapp.com/message/2XMMZXDCAXPBL1?autoload=1&app_absent=0' className='hover:scale-150 transition duration-150'> <IoLogoWhatsapp /> </Link>
        </div>
    </>
  )
}

export default Icons