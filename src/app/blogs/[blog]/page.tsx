"use client"
import React from 'react'
import { useEffect } from "react"

type Blog = {
    title : string,
    href : string,
    description : string
}


const Blog = (params : {params : {blog : string}}) => {

    const [blog,setBlog] = React.useState<Blog>();
    const blodId = params.params.blog;

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`/api/blogs/${blodId}`)
                if(res.ok) {
                  const data = await res.json();
                  setBlog(data.blog)
                }
            } catch (error) {
                console.log("something went wrong in api req")
            }
        };
        fetchBlog();
    },[]);

  return (
    <div className='min-h-screen'>
        {
            blog && (
                <div className="">
                    <h1 className='heading'>{blog.title}</h1>
                     <p className='para2'>{blog.description}</p>
                </div>
            )
        }
    </div>
  )
}

export default Blog