import React from 'react'
import Container from '@/components/Container'
import {MdOutlineUnsubscribe} from 'react-icons/md'
const NotificationBar = () => {
  return (
    <div className='flex justify-center bg-orange-300  py-2  items-center md:gap-0 '>
    <Container >
    <div>
      <h1 className='text-sm font-semibold flex items-center gap-2 '>  SUBSCRIBE FOR 10% OFF YOUR FIRST PURCHES <MdOutlineUnsubscribe className='text-lg' /> </h1>
    </div>
    </Container>
    </div>
  )
}

export default NotificationBar