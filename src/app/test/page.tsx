import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
// "use client"
// import React, { useEffect, useState } from 'react';

// const imgLi = [
//   "https://cdn.pixabay.com/photo/2023/06/21/16/26/warnemunde-8079731_1280.jpg",
//   "https://cdn.pixabay.com/photo/2023/01/01/09/30/lonely-7689797_1280.jpg",
//   "https://cdn.pixabay.com/photo/2023/07/04/10/20/river-8105970_1280.jpg",
//   "https://cdn.pixabay.com/photo/2023/07/11/08/50/fireworks-8119898_1280.jpg",
//   "https://cdn.pixabay.com/photo/2023/05/30/15/12/blue-butterfuly-8028888_1280.jpg"
// ]

// const Page: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleSlideChange = (slideIndex: number) => {
//     setCurrentSlide(slideIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((currentSlide + 1) % 5);
//     }, 3000); // 3000 milliseconds (3 seconds) interval

//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   return (
//     <div id="default-carousel" className="relative w-full" data-carousel="slide">
//       {/* <!-- Carousel wrapper --> */}
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {imgLi.map((item, index) => (
//           <div
//             key={index}
//             className={`duration-700 ease-in-out absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${index === currentSlide ? 'block' : 'hidden'}`}
//             data-carousel-item
//           >
//             <img
//               src={item}
//               className="block w-full"
//               alt="..."
//             />
//           </div>
//         ))}
//       </div>
//       {/* <!-- Slider indicators --> */}
//       <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black_04' : 'bg-black_02'}`}
//             aria-current={index === currentSlide}
//             aria-label={`Slide ${index + 1}`}
//             data-carousel-slide-to={index}
//             onClick={() => handleSlideChange(index)}
//           ></button>
//         ))}
//       </div>
//       {/* <!-- Slider controls --> */}
//       <button
//         type="button"
//         className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//         onClick={() => handleSlideChange((currentSlide - 1 + 5) % 5)}
//       >
//         {/* Previous button icon */}
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//         onClick={() => handleSlideChange((currentSlide + 1) % 5)}
//       >
//         {/* Next button icon */}
//       </button>
//     </div>
//   );
// };

// export default Page;
