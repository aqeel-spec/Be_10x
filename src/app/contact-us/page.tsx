import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen font-sans  '>
        <div className=" mt-10 m-auto  p-4 justify-between max-w-xl ">
           {/* Contact */}
          <div className=" space-y-4 ">
            {/* heading1 */}
            <h1 className=' heading  '>Contact Us</h1>
            {/* elements */}
            <div className=" space-y-4 m-4">
                <p className=' text-black04 '>We would love to hear from you.Feel free to reach out using the below details</p>
                <p className='text-black01 font-semibold'>Contact number : <span className=' text-black04 font-normal '>+918830051693</span> </p>
                <p className='para'>Email : <span className='text-black04 font-normal'>hello@b10x.in</span></p>
            </div>
          </div>
          {/* Visit Us */}
          <div className="space-y-4">
            {/* Heading1 */}
            <h1 className='heading'>Visit Us</h1>
            {/* heading 2 elements */}
            <div className="flex items-center space-x-4 m-4 ">
              <h3 className='text-black01 text-xl font-bold'>Address :</h3>
              <p className='text-black04 font-normal'>5 Jorabagan Street, Jorabagan, Kolkata - 700006</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page