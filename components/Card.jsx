// "use client"

// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Card = ({items}) => {
//   // console.log(items)
//   return (
//     <div key={items.attributes.id} className=" px-[2px] py-2 w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/2 sm:w-1/3 sm:gap-4" >
//       <Link href='/shop/id'>
//         <div className="h-full border-2 border-gray-20 border-opacity-60  overflow-hidden">
//           <Image className="lg:h-80 h-[200px] md:h-46 w-full object-cover object-center hover:scale-105" height={600} width={400} priority src={`${items.attributes.thumbnail.data.attributes.url}`} alt={items.attributes.name} />
//           <div className="p-2">
//             <h1 className="title-font text-md font-medium text-gray-900 mb-3">{items.attributes.name}</h1>
//             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{items.attributes.subtitle}</h2> 
//           </div>
//         </div>
//       </Link>
//     </div>
//   )
// }

// export default Card