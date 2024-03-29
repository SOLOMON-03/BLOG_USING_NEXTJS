import React from 'react'

const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
}

const PostUser = async ({userId}) => {
    const user = await getData(userId);
    return (
        <div className='flex flex-col'>
            <span className='text-sm text-gray-400 p-1 max-md:text-[12px]'>Author</span>
            <span className='text-sm text-white p-1 max-md:text-[12px]'>{user.username}</span>
        </div>
    )
}

export default PostUser