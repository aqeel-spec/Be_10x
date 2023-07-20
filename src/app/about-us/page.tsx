"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import TestimonialCard from '@/components/TestmonialCard';
import { tesmonialData } from '@/lib/data';

const About = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 3;
  const totalTestimonials = tesmonialData.length;
  const totalPages = Math.ceil(totalTestimonials / testimonialsPerPage);

  const handlePageChange = (page : any) => {
    setCurrentPage(page);
  };

  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = tesmonialData.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );

  return (
    <div className='min-h-screen font-sans'>
      <section className="dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black_02 md:text-5xl lg:text-6xl ">
            Our Mission: Empowering Dreams, Inspiring Futures
          </h1>
          <p className="mb-8 text-lg font-normal para2 lg:text-xl sm:px-16 lg:px-48 ">
            At [Your Brand Name], we believe in the power of dreams and innovation. Our mission is
            to empower students, professionals, and startups, nurturing their journey to success. Discover the story
            behind our dedication to fostering a thriving entrepreneurial ecosystem.
          </p>
          <Link
            href="/about"
            className="inline-flex justify-center items-center btn py-2 px-6 text-base font-medium text-center text-black_02  rounded-lg border border-gray-300  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Additional Testimonials */}
      <div className="grid px-4 my-14 text-left md:text-center items-center mx-auto content-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {currentTestimonials.map((client) => (
          <TestimonialCard key={client.name} client={client} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`h-2.5 w-2.5 mx-1 rounded-full ${
              currentPage === index + 1 ? 'bg-black_02' : 'bg-black_04'
            }`}
          />
        ))}
      </div>

      {/* Additional Content */}
      <section className="mt-8 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-black_02 md:text-4xl lg:text-5xl ">MISSION</h2>
          <p className="mb-8 text-lg font-normal para2 lg:text-xl sm:px-16 lg:px-48">
            Our mission is to empower individuals with the knowledge, resources, and
            support they need to thrive in the world of software development and
            entrepreneurship. We strive to provide a comprehensive platform that fosters
            innovation, facilitates continuous learning, and creates opportunities for personal
            and professional growth. By nurturing a vibrant community and offering top-notch
            tools and guidance, we aim to unlock the full potential of every aspiring developer
            and entrepreneur, enabling them to succeed in their respective fields.
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-black_02 md:text-4xl lg:text-5xl ">VISION</h2>
          <p className="mb-8 text-lg font-normal para2 lg:text-xl sm:px-16 lg:px-48">
            Our vision is to be the leading platform that transforms aspiring software
            developers and entrepreneurs into industry leaders. We envision a world where
            individuals have access to the resources, mentorship, and opportunities they
            need to turn their ideas into reality. By leveraging cutting-edge technologies and
            cultivating a collaborative environment, we aim to fuel innovation, foster a lifelong
            passion for learning, and drive the next generation of successful software
            developers and trailblazing entrepreneurs.
          </p>
          <p className="mb-4 text-base text-gray-600">If you like this content, may I ask for a 5-star rating? Thanks. More power to your business!</p>
          <p className="text-sm text-gray-600">- Rysa Batas (@devdesigngenius)</p>
        </div>
      </section>
    </div>
  );
};

export default About;


// import React from 'react'

// const About = () => {
//   return (
//     <div className='min-h-screen mx-2 my-3 md:mx-14 md:my-10 text-black04 '>
//         {/* heading */}
//         <h1 className='heading'>About Us</h1>
//         {/* main */}
//         <div className=" px-2 space-y-4 my-4 md:px-4">
//             <p>At Be10X, we believe in empowering professionals to become the best versions of themselves in the rapidly evolving digital world. As a leading edtech startup, we specialize in providing innovative workshops and masterclasses designed to enhance skills, boost productivity, and help professionals achieve their career goals.</p>
//             <p>
//             In the age of AI, we understand its power and its necessity. That’s why our courses are aimed to make AI an accessible and empowering tool for everyone. We firmly believe that “<b>AI won’t replace you, but a person using AI will</b>.“
//             </p>
//             <ul className='px-2 space-y-4 '>
//                 <li className='p-1 '>
//                     <h1 className='font-bold'>Our Vision</h1>
//                     <p className='text-base'>To be the go-to platform for working professionals seeking to understand and leverage AI to accelerate their career growth.</p>
//                 </li>
//                 <li className='p-1 '>
//                     <h1 className='font-bold'>Our Mission</h1>
//                     <p className='text-base'>To empower working professionals by enhancing their skills and productivity, transforming them into a 10x version of themselves.</p>
//                 </li><li className='p-1 space-y-2 '>
//                     <h1 className='font-bold'>About The Founders</h1>
//                     <p className='text-base'>Aditya Goenka and Aditya Kachave, both IIT-Kharagpur alumni and successful co-founders of several 8 figure companies like Mad About Sports and Muni Edtech, founded Be10X.</p>
//                     <p>
//                     Inspired by advancements in AI tools such as ChatGPT, they realized the immense potential of AI in transforming careers. They bring their rich entrepreneurial experience and deep knowledge of AI to Be10X, shaping it as a premier platform for AI education
//                     </p>
//                 </li><li className='p-1 space-y-2 '>
//                     <h1 className='font-bold'>Our Impact</h1>
//                     <p className='text-base'>Since our inception in March 2023, we’ve garnered an average rating of 4.9/5, enrolled over 50,000 students, and conducted more than 200 workshops.</p>
//                     <p>So if you want to</p>
//                     <ul className='list-disc m-10 '>
//                         <li>Boost Your Productivity</li>
//                         <li>Save up to 2 hours every day</li>
//                         <li>Become a 10X version of yourself</li>
//                     </ul>
//                     <p>take up our courses today!</p>

//                 </li>
//             </ul>
//         </div>
//     </div>
//   )
// }
// export default About