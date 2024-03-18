import React from 'react'
import Links from './Links/Links'

const Header = () => {
  return (
    <div className='mx-20 flex justify-between items-center p-3 text-white font-semibold'>
        <div>
            <h1 className='text-4xl'>Blog</h1>
        </div>
        <div >
            <Links />
        </div>
    </div>
  )
}

export default Header