import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const li = [
  {
    name: 'About Us',
    path: '/about-us',
  },
  {
    name: 'Contact Us',
    path: '/contact',
  },
  {
    name: 'Teach Us',
    path: 'https://docs.google.com/forms/d/e/1FAIpQLSdTN31I2-BW2ANltXpnMvgikE3mQmBX_Poyk2qozohnw7DPfQ/viewform',
  },
  {
    name: 'Cancellation/Refund Policy',
    path: '/refund-policy',
  },
  {
    name: 'Privacy Policy',
    path: '/privacy-policy',
  },
  {
    name: 'Terms of use',
    path: '/terms-of-use',
  },
];

const Footer = () => {
  return (
    <div className="py-2 bg-black_04 text-black_02 content-end space-y-3 mt-2 mx-auto justify-items-start">
      {/* Icons */}
      <div className="flex justify-center items-center space-x-4">
        {/* <FaFacebookSquare className="fill-blue-500 rounded-2px cursor-pointer hover:bg-blue h-6 w-6" />
        <AiOutlineInstagram className=' cursor-pointer hover:bg-pink-700 bg-black03 text-white rounded-[3px] p-[2px] h-[20.5px] w-[20.5px]'/>
        <AiOutlineTwitter className="hover:text-blue cursor-pointer h-6 w-6" />
        <AiFillLinkedin className="hover:text-white02 hover:bg-black03 cursor-pointer h-6 w-6" />
        <AiFillYoutube className="hover:text-red-500 cursor-pointer h-6 w-6" /> */}
      </div>
      {/* Footer list */}
      <ul className="text-base md:flex-row flex flex-col text-center gap-4 justify-center mx-auto items-center">
        {li.map((list) => (
          <li key={list.name}>
            <a href={list.path}>{list.name}</a>
          </li>
        ))}
      </ul>
      {/* CopyRight section */}
      <div className="text-base text-center justify-center">
       Copyright @ &copy; 2023 <span className="font-bold">Be 10X</span>
      </div>
    </div>
  );
};

export default Footer;
