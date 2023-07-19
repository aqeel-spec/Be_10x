import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { IconType } from 'react-icons';
import { CheckboxWithText } from './CheckBoxLi';
import { tesmonialData } from '@/lib/data';
import { AiFillStar, AiOutlineStar, AiOutlineUser } from "react-icons/ai";


interface CardLi {
    name : string,
    icon : any,
    des : string,
}

export type Data = {
    cardList : CardLi[],
    checkBoxLi? : string[],
    name? : string,
    title : string,
    intro : string,
    ProfileIcon : IconType,
    LineIcon : IconType,
    // why us
    para1 : string,
    para2 : string
}

const Landing = (data :{data : Data} ) => {

    const {LineIcon,cardList,title,intro, ProfileIcon , para1 , para2, checkBoxLi,name } = data.data;

  return (
    <div className='min-h-screen p-6 m-4'>
        {/* main heading */}
        <div className="min-h-screen m-4">
            <h1 className='heading flex mx-auto p-4  w-fit text-center items-center '>
            <LineIcon className='mr-2'/> <span>{name}</span>
            </h1>
            <p className='text-black_02 mx-auto p-4  w-fit text-center items-center'>Please check the all the boxes where  your answers is yes</p>
            {/* checkList */}
            {
                checkBoxLi&& (
                    <CheckboxWithText list={checkBoxLi}/>
                )
            }
            {/* Discount Offers */}
            <div className=" min-h-fit p-2 md:min-h-[60vh] ">
                <h1 className='heading text-center text-black_01 my-10'>Get the offer</h1>
                <div className="text-center  items-center  mx-auto">
                    {/* new price & old price */}
                    <h1 className='heading text-center text-black_01'>$999 <span className=' text-black_03 font-normal line-through '>$2999</span></h1>
                    {/* Register btn */}
                    <Link href={`/auth/signUp`} className=' mx-auto justify-center items-center content-center '>
                        <button className='btn  '>Register now</button>
                    </Link>
                </div>
                
            </div>
            {/* Testmonials */}
            <h1 className='heading text-center my-10'>What Saying Our Happy Customers</h1>
            <div className="grid my-14 text-left md:text-center items-center mx-auto content-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    tesmonialData.map((client) => (
                        <div className=" space-y-2  " key={client.name}>
                            {/* client img */}
                            <div className=" justify-center items-center text-center mx-auto bg-black_04 p-4 rounded-full w-fit ">
                                <AiOutlineUser className='icon' />
                            </div>
                            {/* client name */}
                            <h1 className='heading'>{client.name}</h1>
                            {/* client feedback */}
                            <p className='para2 min-h-[90px] '>{client.des}</p>
                            {/* client star */}
                            <div className='star-rating'>
                                {[...Array(client.tRating)].map((_, index) => (
                                index < client.rating ? (
                                    <AiFillStar key={index} className='h-7 w-7 text-black_03'/>
                                ) : (
                                    <AiOutlineStar key={index} className='h-7 w-7 text-black_03'/>
                                )
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
       <div className="py-4 flex md:flex-row  flex-col  justify-between m-4 mx-auto ">
            {/* Heading */}
            <div className=" max-w-2xl ">
                <h1 className='heading'>{title}</h1>
                {/* Introduction */}
                <p className='text-base text-black_02 py-2 m-2  '>
                   {intro}
                </p>
            </div>
            <div className=" justify-center items-center text-center mx-auto">
                <ProfileIcon   className=' h-40 w-40 '/>
            </div> 
       </div>
        {/* Key Features */}
        <div className=" my-10 ">
           <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2  justify-center items-center mx-auto text-center ">
                {/* img */}

                {
                   cardList &&  cardList.map((item,index) => (
                        <div key={index} className="  space-y-2  ">
                            {/* img or Icon */}
                            <div key={item.name}  className=" items-center justify-center justify-items-center mx-auto p-4 bg-black_04 w-fit rounded-full">
                                <Image src={item.icon} alt={item.name} height={56} width={56} className='   icon' />
                            </div>
                            {/* text */} 
                            <h2 className='heading2'>{item.name}</h2>
                            {/* para */}
                            <p className='para2 min-h-[150px]'>{item.des}</p>
                        </div>
                    ))
                }
                
                
           </div>
        </div>
        {/* Why Choose Us */}
        <div className="container">
            <h1 className='heading text-center my-10'>Why Choose Us</h1>
            <p className='para'>
               {para1}
            </p>
            {/* <img src="https://cdn.pixabay.com/photo/2023/07/08/09/53/monastery-8114076_1280.jpg" alt="Startup Image" className="image" /> */}
            <div className="cta">
                
                <p className='text-sm my-2 text-black_02 leading-5'>{para2}</p>
                <Link href={`/auth/signUp`} >
                    <button className='btn'>Get Started Now</button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Landing