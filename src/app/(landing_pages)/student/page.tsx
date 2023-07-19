import React from 'react'
import { Landing } from '@/components'
import { IconBaseProps } from 'react-icons'
import { Data } from '@/components/Landing'
import { PiStudentFill } from 'react-icons/pi';
import { toolbos , community , competitive , presentation } from '../../../../public/students';

const Student = () => {
    const data : Data = {
        cardList : [
            {
                name : "Young Entrepreneur Toolkit",
                icon : toolbos,
                des :  `Access a special toolkit designed to support students in their
                entrepreneurial journey.`,
            },
            {
                name : "Interactive Workshops",
                icon : community,
                des :  `Participate in hands-on workshops led by industry experts and successful
                entrepreneurs.
                `,
            },
            {
                name : "Pitch Competitions",
                icon : competitive,
                des : "Showcase your ideas and compete for exciting opportunities and rewards."
            },
            {
                name : "Community Support",
                icon : presentation,
                des : "Connect with fellow student entrepreneurs, mentors, and professionals."
            }
            
        ],
        title : "Ignite Your Entrepreneurial Passion - For Ambitious Students",
        intro : `Attention all student innovators and dreamers! [Your Brand Name] is your gateway to a world of
        entrepreneurship. We believe that the next generation of leaders will shape the future, and we are here to
        provide you with the resources and guidance to turn your passion into a thriving reality. Whether you have
        a groundbreaking idea or want to explore the entrepreneurial mindset, we've got the tools you need.
        `,
        ProfileIcon : PiStudentFill ,
        para1 : `Join a community of ambitious students from around the world who share your enthusiasm for
        entrepreneurship. [Your Brand Name] is here to fuel your creativity, ambition, and passion, helping you
        pave the way for a future of innovation and success`,
        para2 : `"Start Your Journey Now" - Embrace your entrepreneurial spirit and embark on a journey of discovery and
        impact. Sign up today and unlock your potential!`,
        LineIcon : PiStudentFill,
        checkBoxLi : [
            "I aspire to become a skilled software developer",
            "I want to actively work on real projects to gain valuable experience",
            "I am determined to earn certifications to validate my expertise",
            "I aim to avoid a gap year and continuously engage in learning",
            "I am eager to learn from lead engineers at industry giants like Microsoft and Amazon" 
        ],
        name : "Students"
    }
  return (
    <Landing data={data} />
  )
}

export default Student