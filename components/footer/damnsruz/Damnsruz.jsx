"use client"

import Link from 'next/link'
import React from 'react'

const Damnsruz = () => {
  return (
    <>
        <section className='/'>
          <div>
            <h3 className='text-[1rem] font-extrabold'>
                Damnsruz
            </h3>
            <hr className='hover:bg-red-600 bg-amber-700 h-[2px] w-[100px]' />
          </div>

          <div className='mx-w-full hover:text-amber-700 flex flex-col text-sm justify-around leading-8'>
              <Link href='#' >
                    Shop Products
              </Link>

              <Link href='#'>
                 Wholesale Signup Form
              </Link>

              <Link href='#'>
                Join FAIRE to be a Wholesaler
              </Link>

              <Link href='#'>
                Our Suppliers
              </Link>

              <Link href='#'>
                Our Suppliers
              </Link>

          </div>
        </section>
    </>
  )
}

export default Damnsruz