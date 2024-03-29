import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';
import PostUser from '@/Component/postUser/PostUser';
const getData = async (slug)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if(!res.ok){
    throw new Error("Something went wrong");
  }

  return res.json();
}
const BlogPage = async ({params}) => {
  const {slug} = params;
  const post = await getData(slug);
  return (
    <div className='flex max-w-6xl justify-center mx-auto gap-5 p-3 max-[600px]:flex-col'>
      <div className='relative w-[40%] max-md:h-[500px] h-[600px] z-[-1] object-cover max-[600px]:w-[100%] max-[600px]:h-[400px]'>
        <Image src='/post1.jpg' alt='' fill />
      </div>
      <div className='flex flex-col gap-5 w-[60%] max-[600px]:w-[100%]'>
        <h1 className='text-5xl text-[#6C63FF] font-bold max-md:text-3xl'>{post.title}</h1>
        <div className='flex gap-6 items-center'>
          <div className="relative w-20 h-20 max-md:w-12 max-md:h-12">
            <Image src='/post1.jpg' alt='' fill className='rounded-full object-cover' />
          </div>
          <PostUser userId={post.userId} />
          <div className='flex flex-col'>
            <span className='text-sm text-gray-400 p-1 max-md:text-[12px]'>Published</span>
            <span className='text-sm text-white p-1 max-md:text-[12px]'>01 july 2003</span>
          </div>
        </div>
        <div>
          <p className='pb-10 max-md:text-sm text-justify max-[500px]:text-[10px]'>{post.body}</p>
          <Link href='/blog' className='flex items-center gap-2 text-[#6C63FF]'><HiArrowLeft/>Return Back</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPage