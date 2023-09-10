// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const CarouselCard = ({ items }) => {
//   return (
//     <>
//       <div key={items.attributes.id} className="mx-4">
//         <Link href="/shop/id">
//           <div className="h-[400px] w-full mx-2 border-2 border-gray-20 border-opacity-60  overflow-hidden">
//             <Image
//               className="h-[300px] w-full object-cover object-center hover:scale-105"
//               height={300}
//               width={300}
//               priority
//               src={`${items.attributes.thumbnail.data.attributes.url}`}
//               alt={items.attributes.name}
//             />
//             <div className="p-2 h-72 w-full">
//               <h1 className="title-font text-md font-medium text-gray-900 mb-3">
//                 {items.attributes.name}
//               </h1>
//               <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//                 {items.attributes.subtitle}
//               </h2>
//             </div>
//           </div>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default CarouselCard;
