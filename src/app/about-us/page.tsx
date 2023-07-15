import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen mx-2 my-3 md:mx-14 md:my-10 text-black04 '>
        {/* heading */}
        <h1 className='heading'>About Us</h1>
        {/* main */}
        <div className=" px-2 space-y-4 my-4 md:px-4">
            <p>At Be10X, we believe in empowering professionals to become the best versions of themselves in the rapidly evolving digital world. As a leading edtech startup, we specialize in providing innovative workshops and masterclasses designed to enhance skills, boost productivity, and help professionals achieve their career goals.</p>
            <p>
            In the age of AI, we understand its power and its necessity. That’s why our courses are aimed to make AI an accessible and empowering tool for everyone. We firmly believe that “<b>AI won’t replace you, but a person using AI will</b>.“
            </p>
            <ul className='px-2 space-y-4 '>
                <li className='p-1 '>
                    <h1 className='font-bold'>Our Vision</h1>
                    <p className='text-base'>To be the go-to platform for working professionals seeking to understand and leverage AI to accelerate their career growth.</p>
                </li>
                <li className='p-1 '>
                    <h1 className='font-bold'>Our Mission</h1>
                    <p className='text-base'>To empower working professionals by enhancing their skills and productivity, transforming them into a 10x version of themselves.</p>
                </li><li className='p-1 space-y-2 '>
                    <h1 className='font-bold'>About The Founders</h1>
                    <p className='text-base'>Aditya Goenka and Aditya Kachave, both IIT-Kharagpur alumni and successful co-founders of several 8 figure companies like Mad About Sports and Muni Edtech, founded Be10X.</p>
                    <p>
                    Inspired by advancements in AI tools such as ChatGPT, they realized the immense potential of AI in transforming careers. They bring their rich entrepreneurial experience and deep knowledge of AI to Be10X, shaping it as a premier platform for AI education
                    </p>
                </li><li className='p-1 space-y-2 '>
                    <h1 className='font-bold'>Our Impact</h1>
                    <p className='text-base'>Since our inception in March 2023, we’ve garnered an average rating of 4.9/5, enrolled over 50,000 students, and conducted more than 200 workshops.</p>
                    <p>So if you want to</p>
                    <ul className='list-disc m-10 '>
                        <li>Boost Your Productivity</li>
                        <li>Save up to 2 hours every day</li>
                        <li>Become a 10X version of yourself</li>
                    </ul>
                    <p>take up our courses today!</p>

                </li>
            </ul>
        </div>
    </div>
  )
}
export default About