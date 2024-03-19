import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto gap-14 p-5'>
      <div className='max-w-2xl mx-auto'>
        <div className=' relative w-[700px] h-[500px] max-[1255px]:w-[500px] max-[1255px]:h-[500px] max-[950px]:hidden z-[-1]'>
          <Image src='/contect.svg' alt='' fill />
        </div>
      </div>
      <div className='border-2 border-[#6C63FF] px-3 py-14 rounded-2xl'>
        <form action="" className='flex flex-col gap-4 text-black font-semibold max-[768px]:font-medium '>
          <h1 className='text-[#6C63FF] font-bold text-4xl text-center uppercase max-[768px]:text-2xl'>Contact</h1>
          <div className='flex flex-col gap-4 p-3 '>
            <input type="text" placeholder="Name and Surname" className='w-96 h-10 p-3 outline-none hover:border-b-4 hover:border-[#6C63FF] rounded-lg max-[1045px]:w-72 max-[375px]:w-60 max-[768px]:p-2 max-[768px]:text-[12px]' />
            <input type="email" placeholder="Email Address" className='w-96 h-10 p-3 outline-none hover:border-b-4 hover:border-[#6C63FF] rounded-lg max-[1045px]:w-72 max-[375px]:w-60 max-[768px]:p-2 max-[768px]:text-[12px]' />
            <input type="text" placeholder="Phone Number (Optional)" className='w-96 h-10 p-3 outline-none hover:border-b-4 hover:border-[#6C63FF] rounded-lg max-[1045px]:w-72 max-[375px]:w-60 max-[768px]:p-2 max-[768px]:text-[12px]' />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className='w-96 p-3 resize-none outline-none hover:border-b-4 hover:border-[#6C63FF] rounded-lg max-[1045px]:w-72 max-[375px]:w-60 max-[768px]:p-2 max-[768px]:text-[12px]'
            ></textarea>
            <button className='bg-[#6C63FF] text-white p-3 border-2 border-[#6C63FF] hover:bg-transparent transition-all duration-700 ease-in-out text-center uppercase rounded-sm'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact