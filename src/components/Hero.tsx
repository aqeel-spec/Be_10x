import Link from 'next/link';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Hero = () => {
  return (
    <div className="w-auto min-h-screen flex justify-center items-center bg-black01">
      <div className=" p-2 md:p-0 gap-y-5 flex flex-col items-center justify-between">
        <h1 className="text-2xl md:text-3xl p-2 md:p-0 lg:text-4xl font-semibold text-white">Become a 10x Better Version of Yourself</h1>
        <button className="btn mt-3">GO TO OUR AI TOOLS WORKSHOP</button>
        <button className="btn mt-3 text-base md:text-sm">GO TO OUR MS OFFICE AI HACKS WORKSHOP</button>
      </div>
    </div>
  );
};

export default Hero;


// import React from 'react'
// import { IoIosArrowDown } from 'react-icons/io'

// const Hero = () => {
//   return (
//     <div className="w-auto   h-[450px] justify-center bg-black01  ">
//       <div className=" mt-20 gap-y-5 m-auto flex flex-col items-center justify-between  ">
//         <h1 className=' text-2xl md:text-4xl font-semibold text-white '>Become a 10x Better Version of Yourself</h1>
//         <button className='btn mt-3'>
//           GO TO OUR AI TOOLS WORKSHOP
//         </button>
//         <button className=' mt-3 btn text-base md:text-sm'>
//           GO TO OUR MS OFFICE AI HACKS WORKSHOP
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Hero