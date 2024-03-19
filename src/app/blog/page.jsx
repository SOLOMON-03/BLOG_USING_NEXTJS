import React from 'react'
import PostCard from '@/Component/postCard/PostCard'

const Blog = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto p-3'>
      <div className='w-[300px]'>
        <PostCard />
      </div>
      <div className='w-[300px]'>
        <PostCard />
      </div>
      <div className='w-[300px]'>
        <PostCard />
      </div>
      <div className='w-[300px]'>
        <PostCard />
      </div>
    </div>
  )
}

export default Blog