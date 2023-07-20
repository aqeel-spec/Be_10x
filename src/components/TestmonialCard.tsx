import React from 'react';
import { AiOutlineUser, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { TesmonialData } from '@/types/data';

const TestimonialCard = ({ client } : {client : TesmonialData}) => {
  return (
    <div className="space-y-2" key={client.name}>
      {/* client img */}
      <div className="justify-center items-center text-center mx-auto bg-black_04 p-4 rounded-full w-fit">
        <AiOutlineUser className='icon' />
      </div>
      {/* client name */}
      <h1 className='heading'>{client.name}</h1>
      {/* client feedback */}
      <p className='para2 min-h-[90px]'>{client.des}</p>
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
  );
};

export default TestimonialCard;
