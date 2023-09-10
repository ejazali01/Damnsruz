// "use client";

// import { useState, useEffect } from "react";
// import MultiCarousel from "../MultiCarousel";
// import { fetchCategoryData } from "@/Utils/Api";



// const CategoryCarousel = () => {
//   const [categoriesData, setCategoriesDaata] = useState();

//   const handleBestSeller = async() => {
//     const {data: categories} = await fetchCategoryData('&filters[categories][slug][$eq]=bestsellers')
//     setCategoriesDaata(categories)
//   }

//   const  handleNewArrivals =async() => {
//     const {data: categories} = await fetchCategoryData('&filters[categories][slug][$eq]=new-arrivals')
//     setCategoriesDaata(categories)
//   }

//   useEffect(() => {
//     handleBestSeller()
//   }, []);

//   return (
//     <>
//       <div>
//         <div className="flex justify-center items-center gap-0">
//                 <>
//                   <div
//                    className="flex justify-center  items-center gap-5 p-2"
//                    >
//                    <button onClick={() =>  handleBestSeller()}  className=" font-montserrat px-3 py-[2px]
//                        hover:bg-gray-100/75 rounded-3xl bg-gray-200/75 " >
//                       bestsellers
//                     </button>

//                     <button onClick={() => handleNewArrivals()} className=" font-montserrat px-3 py-[2px]
//                        hover:bg-gray-100/75 rounded-3xl bg-gray-200/75 " >
//                       new arrivals
//                     </button>
                    
//                   </div>
//                 </>
//         </div>

//         <div className="flex justify-center mt-10 items-center">
//           <MultiCarousel categoriesData={categoriesData} />
//           {/* <EmblaCarousel /> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CategoryCarousel;
