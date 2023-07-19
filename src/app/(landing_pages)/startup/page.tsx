import React from 'react'
import { TbApi } from "react-icons/tb";
import { api } from '../../../../public/startups';
import { security , dataAnalytics , securityData } from '../../../../public';
import { FcAcceptDatabase } from 'react-icons/fc';
import Image from 'next/image';
import Link from 'next/link';
import { CheckboxWithText } from '@/components/CheckBoxLi';
import Landing, { Data } from '@/components/Landing';
import { BsRocketTakeoffFill } from 'react-icons/bs';

const checkList = [
    "I am seeking scalable backend APIs that can adapt to my business's evolving requirements.",
    `I value a service that provides hassle-free maintenance support, allowing
    me to focus on building my business.`,
    `I want to take advantage of a special offer to try the first year absolutely free`,
    `I want to kickstart my startup with a powerful suite of tools and resources`
]

const Startups = () => {
    const data : Data = {
        LineIcon : BsRocketTakeoffFill,
        name : "Startups",
        checkBoxLi :checkList, 
        cardList : [
            {
                name : "Seamless Integration",
                icon : api,
                des :  `Integrate our API effortlessly with your existing systems and applications`,
            },
            {
                name : "Reliability & Scalability",
                icon : security,
                des :  ` Our platform is built for stability, ensuring smooth operations as your startup
                scales. `,
            },
            {
                name : "Data Security",
                icon : securityData,
                des : "Rest assured that your sensitive data is protected with advanced security measures."
            },
            {
                name : "Seamless Integration",
                icon : dataAnalytics,
                des : "Gain valuable insights and make data-driven decisions to optimize your business"
            }
        ],
        title : "Empower Your Startup with Our Backend API Platform",
        intro : `Welcome to [Your Brand Name]&apos;s Startup Solutions! We understand that startups need robust technological
        support to thrive in today&apos;s competitive landscape. Our backend API platform is designed to provide the
        backbone of your digital infrastructure, enabling you to focus on innovation, growth, and customer
        engagement. With our powerful and scalable solutions, you can unlock your startup&apos;s true potential.`,
        ProfileIcon : FcAcceptDatabase ,
        para1 : ` Our Startup Solutions are trusted by visionary entrepreneurs around the world. Join our growing community and let
        us be your reliable technology partner on this exciting journey. Embrace innovation and elevate your startup to
        new heights with <strong>[Your Brand Name]</strong>.`,
        para2 : `Take your startup to the next level with our backend API platform. Sign up for a free
        trial today!`
    }
  return (
    <Landing data={data}/>
  )
}

export default Startups