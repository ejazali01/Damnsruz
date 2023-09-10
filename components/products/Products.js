// "use client"

// import React from 'react'
// import { useState, useEffect } from 'react';
// import Card from '../Card';

// const Products = ({products}) => {

//   const [productData, setProductData] = useState();
  
//   useEffect(() => {
//     fetchData()
//   }, []);
  
//   const fetchData = async() => {
//     setProductData(products)
//   }

//   return (
//     <>
    
//      <section className="text-gray-600 body-font">
//           <div className="py-14 -m-4 flex flex-wrap ">
         
//       {
//         products.map((items) => {
//           return (
//             <>
//                 <Card items= {items}  />
//             </>
//           )
//         })
//       }
      
//     </div>
//   </section>

//     </>
//   )
// }

// export default Products