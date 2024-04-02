"use client"
import React, { useEffect, useState } from 'react'
import PostCard from '@/Component/PostCard/PostCard'    
// import { getPosts } from '@/lib/data';

// const getData = async ()=>{
//   const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});
//   if(!res.ok){
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// }
// export const metadata = {
//   title: "Blog page",
//   description: "Blog page",
// };
const Blog = async () => {
  // const posts = await getData();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/blog", { method: 'GET' });
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto p-3 '>
      {posts.map(post=>(
      <div className='w-[350px] h-[600px] hover:bg-[#6C63FF] rounded-lg transition-all duration-700 ease-in-out group' key={post.id}>
        <PostCard post={post}/>
      </div>
      ))}
    </div>
  )
}

export default Blog