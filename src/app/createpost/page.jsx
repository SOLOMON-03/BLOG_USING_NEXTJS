import { addPost } from '@/lib/action'
import React from 'react'

const CreatePost = () => {
  return (
    <div className='text-black '>
        <form action={addPost}>
            <input type='text' name='title' placeholder='Enter a Title' />
            <input type='text' name='desc' placeholder='Enter a Description' />
            <input type='text' name='slug' placeholder='Enter a Title' />
            <input type='file' name='img' />
            <button className='text-white'>Create</button>
        </form>
    </div>
  )
}

export default CreatePost