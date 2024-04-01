import React from 'react'
import Links from './Links/Links'
import { auth } from '@/lib/auth'

const Header = async() => {
  const session = await auth()
  return (
    <div className='mx-2 flex justify-between items-center p-3 text-white font-semibold'>
        <div>
            <h1 className='text-4xl'>Blog</h1>
        </div>
        <div >
            <Links session={session}/>
        </div>
    </div>
  )
}

export default Header