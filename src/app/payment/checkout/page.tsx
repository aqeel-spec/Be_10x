"use client"
import React, { useState } from 'react';
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
import Link from 'next/link';

const page = () => {
    const [phone,setPhone] = useState<number | any>();
  return (
    <div className='min-h-screen py-4 text-black_02 max-w-xl p-2 md:p-4 md:max-w-2xl lg:max-w-3xl  m-auto justify-center  '>
    {/* heading */}
    <div className=" m-4 max-w-2xl justify-between text-left space-y-4 md:text-center items-center  mx-auto ">
      <h2 className=' text-black_02 font-normal text-2xl '>Checkout</h2>
    </div>
    <div className="grid gap-4  w-full grid-cols-1 md:grid-cols-2 items-center ">
      {/* firstName */}
      <div className="">
        <Label htmlFor="firstname">Login/Email</Label>
        <Input type="text" id="firstname" placeholder="First Name" className='form'/>
      </div>
      {/* lastName */}
      <div className="">
        <Label htmlFor="lastname">Login/Email</Label>
        <Input type="text" id="lastname" placeholder="Last Name" className='form'/>
      </div>
      {/* Email */}
      <div className="">
        <Label htmlFor="email">Login/Email</Label>
        <Input type="email" id="email" placeholder="@email" className='form'/>
      </div>
      {/* Whatsapp number */}
      <div className="">
        <Label htmlFor="number">Whatsapp number</Label>
        <PhoneInput
            className='p-2 form'
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
        />
      </div>
      {/* Course Name */}
      <div className="">
        <Label htmlFor="course">Login/Email</Label>
        <Input type="text" id="course" placeholder="Course Name" className='form'/>
      </div>
      {/* Enter Coupen Code */}
      <div className="">
        <Label htmlFor="coupen">Enter Coupen Code</Label>
        <Input type="number" id="coupen" placeholder="0 0 0 0" className='form text-center items-center'/>
      </div>
      
  </div>
  {/* Course Details */}
  <div className="flex items-center justify-center gap-10  p-4 text-black_02 ">
    <h1>Noe Course Free</h1>
    <p>Price- <span className='text-black_01'><strong>$999</strong></span></p>
  </div>
   {/* btn Create my account */}
   <div className="mx-auto w-fit m-2 justify-center items-center content-center justify-items-center ">
      <Link href={`/payment/order`}>
        <button className='btn rounded-lg '>Proceed to Checkout</button>
      </Link>
   </div>
  </div>
  )
}

export default page