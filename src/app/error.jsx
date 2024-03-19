'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const error = () => {
  return (
    <div className='flex max-[1130px]:justify-center'>
      <div className='px-36 max-[950px]:px-16 max-[780px]:px-3 max-[375px]:px-1 '>
        <div className=' relative w-[600px] h-[500px] max-[780px]:w-[400px] max-[780px]:h-[400px] max-[530px]:w-[260px] max-[530px]:h-[260px] z-[-1]'>
          <Image src='/error.svg' alt='' fill />
        </div>
      <div className='absolute top-[350px] right-[150px] text-center max-[1290px]:right-[100px] max-[1045px]:right-[50px] max-[1130px]:static'>
        <h1 className='text-7xl text-[#6C63FF] pb-2 max-[1290px]:text-5xl max-[1255px]:text-4xl max-[530px]:text-xl'>500 Error Found</h1>
        <Link href='/' className='underline text-xl max-[530px]:text-sm'>Return home</Link>
      </div>
      </div>
    </div>
  )
}

export default error