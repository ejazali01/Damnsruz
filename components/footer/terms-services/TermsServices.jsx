"use client"

import Link from 'next/link'
import React from 'react'
import {CgCopyright} from 'react-icons/cg'


const TermsServices = () => {
  return (
    <div className='py-8 lg:pt-12 w-full'>
    
    <div className='md:flex md:justify-center md:items-center gap-10 md:mx-36'>

    <div className='text-sm mx-36 md:mx-0 flex sm:gap-8 gap-4 justify-around'>
        <div className='flex'>
            <CgCopyright className=' text-xl' />
            <Link href='/'>Damnsruz2023</Link>
        </div>

    
        <div>
            <Link href='/termsofservices' className='hover:text-amber-700 '>
                TERMSOFSERVICE
            </Link> 
        </div>
        <span>
            <Link href='/shippingpolicy' className='hover:text-amber-700'>
            SHIPPINGPOLICY
            </Link> 
        </span>

    </div>
<div className='text-sm mx-36 md:mx-0 py-2 sm:gap-6 gap-2 flex justify-around'>
        <div>
        <Link href='/return' className='hover:text-amber-700'>
                    RETURN&EXCHANGEPOLICY
            </Link> 
       </div>
       

        <span>
            <Link href='/privecypolicy' className='hover:text-amber-700'>
                    PRIVACYPOLICY
            </Link> 
        </span>
</div>
</div>
    </div>
  )
}

export default TermsServices