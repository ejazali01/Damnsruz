import Link from 'next/link'
import React from 'react'
import Container from '../Container'

const Hero = () => {
  return (
    <div className="bg-scroll bg-[url('/hero.jpg')] h-[500px] max-w-full bg-no-repeat bg-cover bg-center overflow-hidden ">
        <Container >
            <section className='text-white flex flex-col  max-w-md '>
                <div className='pt-28'>
                    <h1 className=' font-cormorant_garamond font-bold text-2xl '>Not Just a Spring Fling 🌼</h1>
                    <h2 className=' font-normal text-xl pt-2'>Timeless pieces that go the distance</h2>
                </div>

                <div className='my-8 '>
                    <Link href='#' className='p-4 hover:bg-black/[0.50] bg-black/[0.30] '> SHOP  SLOW STAPLES </Link>
                </div>
            </section>
        </Container>
    </div>
      
  )
}

export default Hero