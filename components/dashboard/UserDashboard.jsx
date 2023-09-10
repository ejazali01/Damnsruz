"use client"

import React from 'react'

const UserDashboard = () => {
  return (
    <div className='h-[70vh] md:w-3/4 m-auto flex justify-center items-center'>
    <div className='md:w-2/6 py-10 m-auto flex flex-col justify-center items-center border bg-orange-300 shadow-xl'>
     <h1 className='text-center py-4'> user data</h1>
     <div className='w-full lg:w-[300px] flex justify-center items-center p-2'>
      Our Dashboard
     </div>

    </div>
    </div>
  )
}

export default UserDashboard