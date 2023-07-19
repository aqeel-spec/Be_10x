"use client"
import React, { useState } from 'react';
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { Input } from "@/ui/input"
import { Label } from "@/ui/label"



const SignUp = () => {

  const [phone,setPhone] = useState<number | any>();

  return (
    <div className='min-h-screen py-4 text-black_02 max-w-xl p-2 md:p-4 md:max-w-2xl lg:max-w-3xl  m-auto justify-center  '>
      {/* heading */}
      <div className=" m-4 max-w-2xl justify-between text-left space-y-4 md:text-center items-center  mx-auto ">
        <h2 className=' text-black_02 font-normal text-2xl '>Register for affiliation program</h2>
        {/* sub heading */}
        <h2>Sign-Up</h2>
        {/* some details */}
        <p className='text-sm'>
          We respect your privacy and protect it with strong encryption, plus strict policies
          Two-step verification, which we encourage all our customers to use.
        </p>
      </div>
      <div className="grid gap-4  w-full grid-cols-1 md:grid-cols-2 items-center ">
        {/* email */}
        <div className="">
          <Label htmlFor="email">Login/Email</Label>
          <Input type="email" id="email" placeholder="@email" className='form'/>
        </div>
        {/* Contact Name */}
        <div className="">
          <Label htmlFor="name">Contact Name</Label>
          <Input type="text" id="name" placeholder="Please enter your name" className='form'/>
        </div>
        {/* Password */}
        <div className="">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="password" className='form'/>
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
        {/* Confirm Password */}
        <div className="">

          <Label htmlFor="cPassword">Password</Label>
          <Input type="password" id="cPassword" placeholder="confirm password" className='form'/>
        </div>
        {/* State */}
        <div className="">

        <Label htmlFor="state">State</Label>
        <Input type="text" id="state" placeholder="Please enter your state name" className='form' />
        </div>
        
    </div>
     {/* btn Create my account */}
     <div className="mx-auto w-fit m-4 justify-center items-center content-center justify-items-center ">
        <button className='btn '>Create my account</button>
     </div>
    </div>
  )
}

export default SignUp