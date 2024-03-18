import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";



const Footer = () => {
  return (
    <div className='flex justify-around p-3 items-center'>
        <div className='text-4xl font-bold '>BLOG</div>
        <div className='text-xl font-semibold'>
          Blog creative thoughts agency © All rights reserved.
        </div>
        <div className='flex gap-4 justify-center items-center text-4xl cursor-pointer '>
          <FaGithub className='hover:scale-125 transition-all ease-in-out duration-500'/>
          <FaLinkedin className='hover:scale-125 transition-all ease-in-out duration-500'/>
          <FaInstagram className='hover:scale-125 transition-all ease-in-out duration-500'/>
          <RiTwitterXLine className='hover:scale-125 transition-all ease-in-out duration-500'/>
        </div>
    </div>
  )
}

export default Footer