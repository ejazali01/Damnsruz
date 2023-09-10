import Link from 'next/link'
import React from 'react'


const NavMenu = () => {
  return (
    <div>
        <ul className='flex text-red-4000 justify-center items-center '>
            <li className='p-4'><Link href='/new'>New</Link></li>
            <li className='p-4'><Link href='/shop'>Shop</Link></li> 
            <li className='p-4'><Link href='/collections'>Collections</Link></li>
            <li className='p-4'><Link href='/collections'>our Story</Link></li>
        </ul>
    </div>
  )
}

export default NavMenu