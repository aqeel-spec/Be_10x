import React from 'react';
import Slider from './Slider';
import {FaUserGraduate} from "react-icons/fa";
import  { IoRocket } from 'react-icons/io5';
import { SiMicrosoftteams } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <Slider />
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-4  ">
        <div className=" space-y-2 p-4 m-2 items-center justify-items-center text-center ">
            {/* Icon */}
            <div className="bg-black_04 w-fit p-6 text-center items-center mx-auto rounded-full text-black_01">
             <IoRocket className=' icon '/> 
            </div>
            <h1 className='text-2xl font-medium text-black_03'>Startups</h1>
            {/* Description  */}
            <p className=' para2 '>&quot;For Visionary Minds&quot; - Unlock the potential of your startup with our reliable backend
                  API platform.
            </p>
            {/* Button */}
            <Link href={`/startup`}>
               <button className='btn'>Know more</button>
            </Link>
        </div>
        <div className=" space-y-2 p-4 m-2 items-center justify-items-center text-center ">
            {/* Icon */}
            <div className="bg-black_04 w-fit p-6 text-center items-center mx-auto rounded-full text-black_01">
             <FaUserGraduate className='icon '/> 
            </div>
            <h1 className='text-2xl font-medium text-black_03'>Students</h1>
            {/* Description  */}
            <p className=' para2 pb-4 '>&quot;Ignite Your Entrepreneurial Passion&quot; - Empowering students to embrace
              entrepreneurship and become tomorrow&lsquo;s leaders.
            </p>
            {/* Button */}
            <Link href={`/student`}>
               <button className='btn'>Know more</button>
            </Link>
        </div>
        {/* 2nd row of grids */}
        <div className=" space-y-2 p-4 m-2 items-center justify-items-center text-center ">
            {/* Icon */}
            <div className="bg-black_04 w-fit p-6 text-center items-center mx-auto rounded-full text-black_01">
            <Image src={`/workforce.png`} alt='Marketing Image' height={56} width={56} className='icon '/>
            </div>
            <h1 className='text-2xl font-medium text-black_03'>Working Professionals</h1>
            {/* Description  */}
            <p className=' para2 '>&quot;Accelerate Your Ideas&quot; - Turn your entrepreneurial ideas into reality
              with our expert guidance.

            </p>
            {/* Button */}
            <Link href={`/professionals`}>
               <button className='btn'>Know more</button>
            </Link>
        </div>
        <div className=" space-y-2 p-4 m-2 items-center justify-items-center text-center ">
            {/* Icon */}
            <div className="bg-black_04 w-fit p-6 text-center items-center mx-auto rounded-full text-black_01">
             <Image src={`/growth.png`} alt='Marketing Image' height={56} width={56} className='icon '/> 
            </div>
            <h1 className='text-2xl font-medium text-black_03'>Sales and Marketing</h1>
            {/* Description  */}
            <p className=' para2 '>&quot;Winning Strategies for Growth&quot; - Supercharge your sales and marketing
              efforts to reach new heights.

            </p>
            {/* Button */}
            <Link href={`/marketing`}>
               <button className='btn'>Know more</button>
            </Link>
        </div>
      </div>
    </>
  )
}
export default Hero;