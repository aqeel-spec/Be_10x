import React from 'react'
import { BlogCard } from '@/components'

const Blog = () => {
  return (
    <div className='min-h-screen mx-14 my-10 '>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4 ">
            <div className=" p-auto ">
                <BlogCard data={{img : "/blog01.jpeg", name : "Founder Profile: Aditya Goenka" }} />
            </div>
            <div className=" p-auto">
                <BlogCard data={{img : "/blog01.jpeg", name : "Founder Profile: Aditya Goenka" }} />
            </div>
            <div className=" p-auto">
                <BlogCard data={{img : "/blog01.jpeg", name : "Founder Profile: Aditya Goenka" }} />
            </div>
        </div>
    </div>
  )
}

export default Blog