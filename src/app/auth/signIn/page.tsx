import { Checkbox } from '@/ui/checkbox'
import { Input } from '@/ui/input'
import { Label } from '@/ui/label'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
  return (
    <div className='min-h-screen py-4 text-black_02 max-w-xl p-2 md:p-4 md:max-w-2xl lg:max-w-3xl  m-auto justify-center  '>
       {/* Heading */}
       <div className=" m-4 max-w-2xl justify-between text-left space-y-4 md:text-center items-center  mx-auto ">
          <h2 className=' text-black_02 font-normal text-2xl '>Welcome to Be-10X</h2>
          {/* Sign-in */}
          <h2>Sign-in</h2>
          {/* some details */}
          <p className='text-sm'>
              We respect your privacy and protect it with strong encryption, plus strict policies
              Two-step verification, which we encourage all our customers to use.
          </p>
       </div>
       {/* form section */}
       <div className=" max-w-md space-y-4 m-2 p-4 text-black_02 mx-auto ">
           {/* Email */}
           <div className="">
              <Label htmlFor="email" className='text-black_02'>Login/Email</Label>
              <Input type="email" id="email" placeholder="@email" className='form'/>
            </div>
           {/* password */}
           <div className="">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="password" className='form'/>
            </div>
           <div className="flex justify-between">
              <div className="flex items-center ">
                {/* checkbox */}
                <Checkbox id="terms1" className="bg-black_04 border-none active:bg-white"  />
                {/* Remember Password */}
                <span className='ml-2 cursor-pointer hover:underline underline-offset-1 decoration-black_02 '>Remember Password</span>
              </div>
              {/* Forget Password */}
              <p className='cursor-pointer hover:underline underline-offset-1 decoration-black_02'>Forget Password</p>
           </div>
           {/* Sign-in */}
           <div className="mx-auto w-fit m-4 justify-center items-center content-center justify-items-center ">
              <button className='btn '>Sign-in</button>
          </div>
           {/* Sign in for an account */}
           <Link href={`/auth/signUp`}  className="mx-auto text-center  my-2 w-fit m-4 justify-center items-center content-center justify-items-center ">
                <div className="">
                  <span className='text-center mx-auto cursor-pointer hover:underline underline-offset-1 decoration-black_02 '><strong>Sign up</strong></span> for an account
                </div>
            </Link>
       </div>
    </div>
  )
}

export default SignIn