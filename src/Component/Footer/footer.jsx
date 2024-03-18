import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";



const Footer = () => {
  return (
    <div className='flex justify-around p-3 items-center max-[680px]:flex-col gap-2'>
        <div className='text-3xl font-bold max-[940px]:text-2xl'>BLOG</div>
        <div className='text-base font-semibold max-[940px]:text-base max-[940px]:font-medium max-[430px]:text-[10px]'>
          Blog creative thoughts agency © All rights reserved.
        </div>
        <div className='flex gap-4 justify-center items-center text-3xl cursor-pointer max-[940px]:text-2xl'>
          <FaGithub className='hover:scale-125 transition-all ease-in-out duration-500'/>
          <FaLinkedin className='hover:scale-125 transition-all ease-in-out duration-500'/>
          <FaInstagram className='hover:scale-125 transition-all ease-in-out duration-500'/>
          <RiTwitterXLine className='hover:scale-125 transition-all ease-in-out duration-500'/>
        </div>
    </div>
  )
}

export default Footer