import React from 'react'
import { Landing } from '@/components'
import { Data } from '@/components/Landing'
import { win , engagement , guidance , exchange , consultataion } from '../../../../public/marketing'
import { IconBaseProps, IconType } from 'react-icons'
import {GiTrophyCup} from 'react-icons/gi'
import { SiMsibusiness } from 'react-icons/si'

const Marketing = () => {
    const data : Data = {
        name: "marketing",

        cardList: [
            {
                name: "Customer Profiling",
                icon: engagement as any,
                des: "Understand your target audience better and create personalized marketing campaigns."
            },
            {
                name: "Lead Generation",
                icon: consultataion,
                des: " Access powerful lead generation tools to identify and connect with potential customers."
            },
            {
                name: "Conversion Optimization",
                icon: guidance,
                des: "Optimize your sales funnel and maximize conversions at every stage."
            },
            {
                name: "Marketing Analytics",
                icon: exchange,
                des: "Make data-driven decisions with real-time marketing performance analytics."
            }
        ],
        title: "Winning Strategies for Business Growth - Sales and Marketing Solutions",
        intro: `Sales and marketing are the lifeblood of every successful business. At [Your Brand Name], we offer
        specialized solutions for businesses looking to elevate their sales and marketing game. Whether you are a
        startup, a small business, or an established enterprise, our tools and insights will help you boost your
        revenue, engage customers, and drive sustainable growth.`,
        ProfileIcon: GiTrophyCup as IconType,
        para2: `"Elevate Your Sales & Marketing" - Supercharge your business growth with our sales and marketing
        solutions. Get started today!
        `,
        para1: `Experience the power of data-backed marketing strategies and sales tactics. Join our community of
        businesses that have witnessed transformative results with [Your Brand Name]. Whether you're looking to
        expand your customer base or strengthen your brand's presence, we are here to help you succeed.`,
        LineIcon: SiMsibusiness,
        checkBoxLi : [
            "Do you want to work on side projects?",
            "Do you need a tech cofounder",
            "Do you have an idea"
        ]
    }
  return (
    <Landing data={data} />
  )
}

export default Marketing