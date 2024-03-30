import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';
import PostUser from '@/Component/postUser/PostUser';
import { getPost } from '@/lib/data';
// const getData = async (slug)=>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if(!res.ok){
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// }
export const generateMetadata = async ({params})=>{
  const {slug} = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  }
}
const BlogPage = async ({params}) => {
  const {slug} = params;
  const post = await getPost(slug);
  return (
    <div className='flex max-w-9xl mx-auto gap-5 p-3 max-[600px]:flex-col'>
      <div className='relative w-[550px] max-md:h-[500px] h-[600px] z-[-1] object-cover max-[600px]:w-[100%] max-[600px]:h-[400px]'>
        <Image src={post.img || '/noimage.svg' } alt='' fill />
      </div>
      <div className='flex flex-col ml-10 gap-5 max-[600px]:w-[100%] w-[60%]'>
        <h1 className='text-5xl text-[#6C63FF] font-bold max-md:text-3xl'>{post.title}</h1>
        <div className='flex gap-6 items-center'>
          
          <PostUser userId={post.userId} />
          <div className='flex flex-col'>
            <span className='text-sm text-gray-400 p-1 max-md:text-[12px]'>Published</span>
            <span className='text-sm text-white p-1 max-md:text-[12px]'>{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div>
          <p className='pb-10 max-md:text-sm text-justify max-[500px]:text-[10px]'>{post.desc}</p>
          <Link href='/blog' className='flex items-center gap-2 text-[#6C63FF]'><HiArrowLeft/>Return Back</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPage