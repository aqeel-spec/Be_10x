import Link from 'next/link'
import React from 'react'
import { FcAcceptDatabase } from 'react-icons/fc'
import { BsMicrosoftTeams } from 'react-icons/bs';
import { TbApi } from 'react-icons/tb'
import { consultation , exchange , creativity , guidance } from '../../../../public';
import Image from 'next/image';
import Landing, { Data } from '@/components/Landing';

const li = [
    {
        name : "Expert Mentorship",
        icon : consultation,
        des : "Connect with experienced mentors who have achieved success in their entrepreneurial endeavors"
    },
    {
        name : "Step-by-Step Guidance",
        icon : guidance,
        des : "Access practical step-by-step guides to navigate the complexities of starting a business"
    },
    {
        name : "Networking Opportunities",
        icon : exchange,
        des : "Expand your network by connecting with like-minded professionals and potential collaborators."
    },
    {
        name : "Inspirational Stories",
        icon : creativity,
        des : "Get inspired by real-life stories of working professionals who turned their ideas into reality"
    },
]

const Professionals = () => {
    const data : Data = {
        cardList : li,
        title : "Unleash Your Entrepreneurial Potential - For Working Professionals",
        intro : ` Are you a working professional with a passion for entrepreneurship? [Your Brand Name] is here to support
        and nurture your ambitions. Our platform offers a wealth of knowledge, resources, and expert guidance to
        help you accelerate your ideas and transform them into successful ventures. Whether you&apos;re dreaming of
        launching your own business or looking to innovate within your current organization, we&apos;ve got you
        covered.`,
        ProfileIcon : BsMicrosoftTeams ,
        para1 : `Our Startup Solutions are trusted by visionary entrepreneurs around the world. Join our growing community and let
        us be your reliable technology partner on this exciting journey. Embrace innovation and elevate your startup to
        new heights with <strong>[Your Brand Name]</strong>.`,
        para2 : `Take your startup to the next level with our backend API platform. Sign up for a free
        trial today!`,
        LineIcon : BsMicrosoftTeams,
        checkBoxLi : [
           "I am committed to advancing as a skilled software developer in my career.",
           `I am interested in exploring a side hustle to expand my income and
            leverage my programming expertise.`,
            "I aspire to launch my own entrepreneurial venture alongside my current profession.",
            `I require support in finding suitable job placements or career advancement
            opportunities.`,
            `I am driven to work on personal projects and bring my innovative ideas to
            fruition through programming.`

        ],
        name : "Working Professionals"
    }
  return (
    <Landing data={data}/>
  )
}

export default Professionals;