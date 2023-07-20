"use client"
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { Textarea } from '@/ui/textarea';
import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Here, you can implement the logic to send the form data to your backend or do any other action as needed.
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  console.log("formData",formData)

  return (
    <div className='min-h-screen font-sans'>
      
      {/* New Top Section */}
      <section className=" dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black_02 md:text-5xl lg:text-6xl ">
            Get in Touch - We&apos;re Here to Help
          </h1>
          <p className="mb-8 text-lg font-normal para2 lg:text-xl sm:px-16 lg:px-48 ">
            Have questions or need assistance? Reach out to our passionate team. Whether you&apos;re a
            startup seeking backend support or a student with entrepreneurial dreams, we&apos;re here to support you. Let&apos;s
            collaborate and drive success.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="btn flex justify-center "
            >
              Get started
              <BsArrowRight className='h-5 w-5 ml-2'/>
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center btn py-2 px-6 text-base font-medium text-center text-black_02  rounded-lg border border-gray-300  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className='mt-10 m-auto p-4 justify-between max-w-xl'>
        

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className='space-y-4'>
          <h1 className='heading'>Contact Form</h1>
          <div className='space-y-4 m-4'>
            <div>
              <Label htmlFor='name'>Name:</Label>
              <Input
                type='text'
                id='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
              />
            </div>
            <div>
              <Label htmlFor='email'>Email:</Label>
              <Input
                type='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
              />
            </div>
            <div>
              <Label htmlFor='subject'>Subject:</Label>
              <Input
                type='text'
                id='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='Enter the subject'
              />
            </div>
            <div>
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" 
               name='message'
               value={formData.message}
               onChange={handleChange}
              //  placeholder='Enter your message'
               required
            />
            </div>
            <div>
              <button type='submit' className='btn w-full'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* ... (existing content) ... */}
        {/* Visit Us */}
        <div className="mt-10 m-auto p-4 justify-between max-w-xl">
          {/* Contact */}
          <div className="space-y-4">
            {/* heading1 */}
            <h1 className='heading'>Contact Us</h1>
            {/* elements */}
            <div className="space-y-4 m-4">
              <p className='text-black04'>We would love to hear from you. Feel free to reach out using the below details</p>
              <p className='text-black01 font-semibold'>Contact number : <span className='text-black04 font-normal'>+918830051693</span> </p>
              <p className='para'>Email : <span className='text-black04 font-normal'>hello@b10x.in</span></p>
            </div>
          </div>
          {/* Visit Us */}
          <div className="space-y-4">
            {/* Heading1 */}
            <h1 className='heading'>Visit Us</h1>
            {/* heading 2 elements */}
            <div className="flex items-center space-x-4 m-4">
              <h3 className='text-black01 text-xl font-bold'>Address :</h3>
              <p className='text-black04 font-normal'>5 Jorabagan Street, Jorabagan, Kolkata - 700006</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;





// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='min-h-screen font-sans  '>
//         <div className=" mt-10 m-auto  p-4 justify-between max-w-xl ">
//            {/* Contact */}
//           <div className=" space-y-4 ">
//             {/* heading1 */}
//             <h1 className=' heading  '>Contact Us</h1>
//             {/* elements */}
//             <div className=" space-y-4 m-4">
//                 <p className=' text-black04 '>We would love to hear from you.Feel free to reach out using the below details</p>
//                 <p className='text-black01 font-semibold'>Contact number : <span className=' text-black04 font-normal '>+918830051693</span> </p>
//                 <p className='para'>Email : <span className='text-black04 font-normal'>hello@b10x.in</span></p>
//             </div>
//           </div>
//           {/* Visit Us */}
//           <div className="space-y-4">
//             {/* Heading1 */}
//             <h1 className='heading'>Visit Us</h1>
//             {/* heading 2 elements */}
//             <div className="flex items-center space-x-4 m-4 ">
//               <h3 className='text-black01 text-xl font-bold'>Address :</h3>
//               <p className='text-black04 font-normal'>5 Jorabagan Street, Jorabagan, Kolkata - 700006</p>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Contact;