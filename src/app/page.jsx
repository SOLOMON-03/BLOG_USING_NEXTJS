import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='flex justify-between items-center max-w-7xl mx-auto gap-10 p-5 max-[730px]:flex-col-reverse'>
      <div className='max-w-2xl mx-auto'>
        <div className='flex flex-col gap-7'>
          <h1 className='text-5xl text-[#6C63FF] font-bold  max-[1125px]:text-4xl max-[370px]:text-2xl'>Creative Thoughts Agency.</h1>
          <p className='text-sm text-justify max-[430px]:text-[12px]'>
          Technology companies offer a wide range of products and services, such as software, hardware, electronics, 
          telecommunications, internet services, cloud computing, artificial intelligence (AI), cybersecurity, and more.
          One of the defining features of technology companies is their emphasis on innovation. They invest heavily in research and 
          development (R&D) to create cutting-edge technologies and improve existing products and services.
          </p>
          <div className='flex gap-10 '>
            <button className='bg-[#6C63FF] text-xl px-4 py-2 rounded-3xl font-semibold max-[775px]:text-base max-[425px]:text-sm'>Learn More</button>
            <button className='bg-[#6C63FF] text-xl px-4 py-2 rounded-3xl font-semibold max-[775px]:text-base max-[425px]:text-sm'>Contact</button>
          </div>
        </div>
      </div>
      <div className='max-w-6xl'>
        <div className='relative w-[500px] h-[500px] max-[930px]:w-[400px] max-[930px]:h-[400px] max-[425px]:w-[300px] max-[425px]:h-[300px] z-[-1]'>
          <Image src='/hero.gif' alt='' fill />
        </div>
      </div>
    </div>
  )
}

export default HomePage;