"use client"

import React from 'react'
import Link from 'next/link'

const CustomerCare = () => {
  return (
    <section>  
        <div>
          <h3 className='text-[1rem] font-extrabold'>
            CustomerCare
          </h3>
          <hr className='hover:bg-red-600 bg-amber-700 h-[2px] w-[100px]' />
        </div>

        <div className='mx-w-full hover:text-amber-700 flex flex-col text-sm justify-around leading-8'>
              <Link href='/Shop' >Shop Products</Link>

              <Link href='/contactus'>
                  Contact Us
              </Link>

              <Link href='/faq'>
                FAQ
              </Link>

              <Link href='/preorder'>
                Pre-Orders
              </Link>

          </div>
    </section>
  )
}

export default CustomerCare