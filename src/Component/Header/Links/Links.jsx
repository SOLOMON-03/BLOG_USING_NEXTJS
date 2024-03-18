import React from 'react'
import NavLinks from './NavLinks/NavLinks'
import Link from 'next/link'


const Links = () => {
    const links =[
        {
            title:"Home",
            path:'/',
        },
        {
            title:"About",
            path:'/about',
        },
        {
            title:"Contact",
            path:'/contact',
        },
        {
            title:"Blog",
            path:'/blog',
        },
    ]
  return (
    <div>
        <div className='flex items-center gap-14 justify-center'>
        {links.map((link =>(
            <NavLinks item={link} key={link.title}/>
        )))}
        </div>
    </div>
  )
}

export default Links