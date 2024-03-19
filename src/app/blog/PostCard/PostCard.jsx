
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex'>
        <div className=' relative w-full h-[400px] z-[-1] object-cover'>
          <Image src='/post1.jpg' alt='' fill/>
        </div>
        <span className='-rotate-90 m-auto text-[12px] text-nowrap'>01 july 2003</span>
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h1 className='text-2xl text-[#6C63FF] font-bold'>Technology</h1>
        <p className='w-[90%] text-sm'>Technology companies operate in various sectors, including information technology (IT),
          telecommunications, healthcare, finance, entertainment, automotive, aerospace, and manufacturing, among others
        </p>
        <Link href='/blog/post' className='underline text-[#a19df1]'>Read More..</Link>
      </div>
    </div>
  )
}

export default PostCard;