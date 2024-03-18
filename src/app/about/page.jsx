import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto gap-10 p-5 max-[730px]:flex-col'>
      <div className='max-w-2xl mx-auto'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-[#6C63FF] text-4xl font-semibold max-[1110px]:text-3xl max-[920px]:text-xl'>About Agency</h2>
          <h1 className='text-[#a19df1] text-6xl max-[1110px]:text-5xl max-[920px]:text-2xl'>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className='text-justify'>
            We create digital ideas that are bigger, bolder, braver and better. We
            believe in good ideas flexibility and precission We’re world’s Our
            Special Team best consulting & finance solution provider. Wide range
            of web and software development services.
          </p>
          <div className='flex items-center gap-10'>
            <div className='text-xl text-[#6C63FF]'>
              <h1 className='text-4xl max-[920px]:text-2xl max-[420px]:text-lg'>90 K+</h1>
              <p className='text-sm text-white max-[920px]:text-[10px]'>Year of experience</p>
            </div>
            <div className='text-xl text-[#6C63FF]'>
              <h1 className='text-4xl max-[920px]:text-2xl max-[420px]:text-lg'>150 K+</h1>
              <p className='text-sm text-white max-[920px]:text-[10px]'>Year of experience</p>
            </div>
            <div className='text-xl text-[#6C63FF]'>
              <h1 className='text-4xl max-[920px]:text-2xl max-[420px]:text-lg'>450 K+</h1>
              <p className='text-sm text-white max-[920px]:text-[10px]'>Year of experience</p>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-6xl'>
        <div className=' relative w-[400px] h-[400px] max-[920px]:w-[300px] max-[920px]:h-[300px] z-[-1]'>
          <Image src='/image.svg' alt='' fill/>
        </div>
      </div>
    </div>
  )
}

export default About