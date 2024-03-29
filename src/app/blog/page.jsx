import React from 'react'
import PostCard from '@/Component/PostCard/PostCard'    

const getData = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}});

  if(!res.ok){
    throw new Error("Something went wrong");
  }

  return res.json();
}

const Blog = async () => {
  const posts = await getData();
  return (
    <div className='flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto p-3 '>
      {posts.map(post=>(
      <div className='w-[300px] h-[670px]' key={post.id}>
        <PostCard post={post}/>
      </div>
      ))}
    </div>
  )
}

export default Blog