import React from 'react'
import { MdOutlineForwardToInbox } from "react-icons/md";

const Orders = () => {
  return (
    <div className='min-h-screen py-4 text-black_02 max-w-xl p-2 md:p-4 md:max-w-2xl lg:max-w-3xl  m-auto justify-center '>
        {/* heading */}
        <div className=" m-4 max-w-2xl justify-between text-left space-y-4 md:text-center items-center  mx-auto ">
            <h2 className=' text-black_02 font-normal text-2xl '>Order placed</h2>
        </div>
        {/* Order details */}
        <div className=" divide-y-2 divide-dotted divide-black_03 max-w-md bg-black_04 justify-center items-center mx-auto p-4 ">
            {/* head */}
            <div className="flex justify-between  mb-2 text-black_02 ">
                <h3>Product</h3>
                <h3>Subtotal</h3>
            </div>
            <div className="flex  items-center justify-between  ">
                <div className="flex items-center py-3 ">
                    <MdOutlineForwardToInbox className='icon font-normal text-lg '/>
                    <p className='ml-2'>Product name here</p>
                    <div className="ml-8 cursor-pointer hover:text-red-400 ">X</div>
                    <div className="ml-4">1</div>
                </div>
                {/* price */}
                <h2>$999</h2>
            </div>
            {/* subtotal row */}
            <div className=" py-4 space-y-4 ">
                {/* total */}
                <div className="flex justify-between">
                    <h1>Subtotal</h1>
                    <h2>$999</h2>
                </div>
                {/* gst */}
                <div className="flex justify-between">
                    <h1>18% GST</h1>
                    <h2>$59</h2>
                </div>
            </div>
            {/* total Price */}
            <div className="py-4 space-y-4">
            <div className="flex justify-between">
                    <h1>Total</h1>
                    <h2>$1058</h2>
                </div>
            </div>
        </div>
        <div className="mx-auto w-fit m-2 justify-center items-center content-center justify-items-center ">
            <button className='btn rounded-lg '>Place order</button>
        </div>
    </div>
  )
}

export default Orders