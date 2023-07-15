"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {IoIosArrowDown} from 'react-icons/io';
import {AiOutlineMenu} from 'react-icons/ai';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/ui/accordion";

const menuLi = [
    {
        name : "",
        path : "",
        list : [
            {
                name : "AI Tools Workshops",
                path : "/ai-hm/"
            },
            {
                name : "Office Hacks Workshops",
                path : "/office-ai-hm/"
            }
        ]
    },
    {
        name : "Contact Us",
        path : "/contact-us/",
    },
    {
        name : "Blog",
        path : "/blog/"
    },
    {
        name: "About Us",
        path : "/about-us/"
    },
    {
        name : "Become an affiliate",
        path : "/become-an-affiliate/"
    },
    {
        name : "My Account",
        path : "/"
    }
]

const NavBar = () => {

    const [open,setOpen] = useState(false);

    const handleChange = async () => {
        setOpen(!open)
    }

  return (
   <>
      <div className='flex justify-between items-center border-b-[1px] py-4 px-8 font-sans '>
            {/* <div className=" font-bold text-xl "`>be<span className=' bg-black text-white px-[4px] py-[8px] rounded-full  '>10X</span></div> */}
            <Link href={`/`}>
                <Image src={`/logo.png`} alt='Logo' height={50} width={100} />
            </Link>
        <ul className='md:flex hidden space-x-4 text-base text-nav leading-2'>
            <div className="group relative cursor-pointer">
                {/* Hover button */}
                <div className="flex   items-center justify-between space-x-5  px-4">
                    <a href="/#" className='flex items-center'>
                        Workshops <span className='ml-1'><IoIosArrowDown /></span>
                    </a>
                </div>

                {/* Dropdown menu list here */}
                <div className="hidden top-6 left-4 transition delay-150 duration-300 ease-in-out border-t-2 border-orange absolute z-50 group-hover:flex w-[235px] flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl">
                   {
                        menuLi[0].list?.map((item) => (
                            <a key={item.name} href={item.path} className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>{item.name}</a>
                        ))
                    }
                </div>
            </div>

            {/* nav manu items */}
            {
                menuLi.map((item) => (
                    <li key={item.name}>
                        <Link href={item.path}>{item.name}</Link>
                    </li>
                ))
            }
        </ul>
        {/* Small screen menu  */}
        
        {
            <div className=" items-center group relative flex flex-col  text-center  md:hidden">
                <div className="  text-[20px] p-[10px] hover:border-[1px] border-orange cursor-pointer">
                    {
                        !open ?  (
                            <AiOutlineMenu className='font-bold text-orange ' onClick={handleChange}/>
                        ) : (
                            <RxCross2 className='font-bold text-orange ' onClick={handleChange}/>
                        )
                    }
                    
                </div>
                {
                    open && (
                        <div className="  fixed top-[81px] left-0 min-w-full bg-white">
                            <div className=" p-3 max-w-[68vh] mx-auto">
                                <nav>
                                    <ul className="  text-start space-y-2 text-nav ">
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Workshops</AccordionTrigger>
                                            <AccordionContent className='flex flex-col  '>
                                               <div className="flex flex-col gap-2">
                                                {
                                                        menuLi[0].list?.map((item) => (
                                                            <Link href={item.path} key={item.name} className='flex  my-2  hover:bg-gray-100 py-1 font-semibold md:mx-2  text-black03 hover:text-black02 ' > <span><MdOutlineArrowBackIosNew className='h-4 items-center rotate-180 text-center w-4'/></span> {item.name}</Link>
                                                        ))
                                                    }
                                               </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                        {menuLi.map((item) => (
                                        <li onClick={handleChange} key={item.name} className='hover:text-black02 hover:font-bold transiton delay-150 duration-300 p-2 rounded-[4px] hover:bg-gray-100' >
                                            <Link href={item.path}>{item.name}</Link>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )
                }


            </div>
        }
    </div>
   </>
  )
}

export default NavBar