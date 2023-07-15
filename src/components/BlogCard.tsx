import React from 'react'
import Image from 'next/image'

type Data = {
  img : string,
  name : string
}

const Card = ({ data }: { data: Data }) => {
  return (
    <div>
       <Image src={data.img} height={200} width={400} className='w-full' alt={data.name} />
       <div className="p-2 space-y-2">
          <h1 className='text-xl font-bold  text-black01 '>{data.name}</h1>
          <p className='text-orange'>Leave a Comment / AI / By kushagravarma / July 7, 2023</p>
          <p className='text-black03'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id veritatis aliquam quam beatae. Voluptatem maxime nihil doloribus quis perspiciatis aliquid, ex quam tenetur temporibus inventore. Veniam nostrum quidem sed. </p>
       </div>
    </div>
  )
}

export default Card