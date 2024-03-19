import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

const BlogPage = () => {
  return (
    <div className='flex max-w-6xl justify-center mx-auto gap-5 p-3 max-[600px]:flex-col'>
      <div className='relative w-[40%] max-md:h-[500px] h-[600px] z-[-1] object-cover max-[600px]:w-[100%] max-[600px]:h-[400px]'>
        <Image src='/post1.jpg' alt='' fill />
      </div>
      <div className='flex flex-col gap-5 w-[60%] max-[600px]:w-[100%]'>
        <h1 className='text-6xl text-[#6C63FF] font-bold max-md:text-3xl'>Technology</h1>
        <div className='flex gap-6 items-center'>
          <div className="relative w-20 h-20 max-md:w-10 max-md:h-10">
            <Image src='/post1.jpg' alt='' fill className='rounded-full object-cover' />
          </div>
          <div className=''>
            <table>
              <thead>
                <tr>
                  <th className='text-sm text-gray-400 p-1 max-md:text-[12px]'>Author</th>
                  <th className='text-sm text-gray-400 max-md:text-[12px]'>Published</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-sm text-gray-400 p-1 max-md:text-[12px]'>Solomon</td>
                  <td className='text-sm text-gray-400 max-md:text-[12px]'>01 july 2003</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p className='pb-10 max-md:text-sm text-justify max-[500px]:text-[10px]'>Technology companies operate in various sectors, including information technology (IT),
            telecommunications, healthcare, finance, entertainment, automotive, aerospace, and manufacturing, among others.
            Many technology companies have a significant impact on the global economy and society. They drive digital transformation,
            disrupt traditional industries, create jobs, and contribute to economic growth.
            The technology industry includes a diverse range of players, from startups and small businesses to large multinational corporations.
            Startups often bring disruptive innovations to the market, while established companies leverage their resources and expertise
            to scale and expand their offerings.
          </p>
          <Link href='/blog' className='flex items-center gap-2 text-[#6C63FF]'><HiArrowLeft/>Return Back</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPage