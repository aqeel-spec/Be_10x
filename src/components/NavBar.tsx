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
import { NavigationMenuDopdown } from './NavigatioManu';

const menuLi = [
    {
        name: "Refer & Earn",
        path : "/refrence"
    },
    {
        name : "Contact Us",
        path : "/contact-us",
    },
    {
        name : "About Us",
        path : "/about-us"
    },
    {
        name : "Testimonial",
        path : "/testimonial"
    },
    {
        name : "My Account",
        path : "account"
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
        <ul className='md:flex hidden space-x-4  text-base  leading-2'>
            <NavigationMenuDopdown />
            {/* nav manu items */}
            {
                menuLi.map((item) => (
                    <li key={item.name} className='hover:text-black_01 text-black_02 hover:font-bold transiton delay-150 duration-300 p-2 rounded-[4px] hover:bg-gray-100'>
                        <Link href={item.path}>{item.name}</Link>
                    </li>
                ))
            }
        </ul>
        {/* Small screen menu  */}
        
        {
            <div className=" z-40 items-center group relative flex flex-col  text-center  md:hidden">
                <div className="  text-[20px] p-[10px] hover:border-[1px] border-black_03 cursor-pointer">
                    {
                        !open ?  (
                            <AiOutlineMenu className='font-bold text-black_02 ' onClick={handleChange}/>
                        ) : (
                            <RxCross2 className='font-bold text-black_02 ' onClick={handleChange}/>
                        )
                    }
                    
                </div>
                {
                    open && (
                        <div className="  fixed top-[81px] left-0 min-w-full bg-white">
                            <div className=" p-3 max-w-[68vh] mx-auto">
                                <nav>
                                    <ul className="  text-start space-y-2 text-nav ">
                                        <NavigationMenuDopdown />
                                        {menuLi.map((item) => (
                                        <li onClick={handleChange} key={item.name} className='hover:text-black_01 text-black_02 hover:font-bold transiton delay-150 duration-300 p-2 rounded-[4px] hover:bg-gray-100' >
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