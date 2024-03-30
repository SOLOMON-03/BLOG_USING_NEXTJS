import { getUser } from '@/lib/data';
import React from 'react'
import Image from 'next/image'

// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

//     if (!res.ok) {
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// }

const PostUser = async ({ userId }) => {
    const user = await getUser(userId);
    return (
        <div className='flex gap-6 items-center'>
            <div className="relative w-20 h-20 max-md:w-12 max-md:h-12">
                <Image src={user.avatar ? user.avatar : '/noavatar.svg'} alt='' fill className='rounded-full object-cover' />
            </div>
            <div className='flex flex-col'>
                <span className='text-sm text-gray-400 p-1 max-md:text-[12px]'>Author</span>
                <span className='text-sm text-white p-1 max-md:text-[12px]'>{user.username}</span>
            </div>
        </div>
    )
}

export default PostUser