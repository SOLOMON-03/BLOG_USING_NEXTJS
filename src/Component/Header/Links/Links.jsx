"use client"
import React, { useState } from 'react'
import NavLinks from './NavLinks/NavLinks'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";



const links = [
    {
        title: "Home",
        path: '/',
    },
    {
        title: "About",
        path: '/about',
    },
    {
        title: "Contact",
        path: '/contact',
    },
    {
        title: "Blog",
        path: '/blog',
    },
]
const Links = () => {
    const session = true;
    const isAdmin = true;
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className='flex items-center gap-10 justify-center max-[950px]:gap-7 max-md:text-sm max-[680px]:hidden'>
                {links.map((link => (
                    <NavLinks item={link} key={link.title} />
                )))}
                {session ?
                    (
                        <>
                            {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
                            <button className='bg-white max-md:text-sm font-semibold text-black px-4 py-2 rounded-xl border border-white hover:bg-black hover:text-white transition-all duration-700 ease-in-out'>
                                Logout
                            </button>
                        </>
                    )
                    :
                    (
                        <NavLinks item={{ title: "Login", path: "/login" }} />
                    )
                }
            </div>
            <div className='min-[680px]:hidden flex justify-center items-center max-[325px]:-mr-6'>
                {!open ? <HiMenuAlt3 className='text-3xl cursor-pointer' onClick={() => setOpen((prev) => !prev)} />
                : <IoClose className='text-3xl cursor-pointer' onClick={() => setOpen((prev) => !prev)} />}
                {open &&
                    <div className='absolute top-[65px] right-0 p-3 flex flex-col gap-7 justify-center items-center w-[60%] bg-black min-h-screen'>
                        {links.map((link => (
                            <NavLinks item={link} key={link.title} />
                        )))}
                        {session ?
                            (
                                <>
                                    {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
                                    <button className='bg-white max-md:text-sm font-semibold text-black px-4 py-2 rounded-xl border border-white hover:bg-black hover:text-white transition-all duration-700 ease-in-out'>
                                        Logout
                                    </button>
                                </>
                            )
                            :
                            (
                                <NavLinks item={{ title: "Login", path: "/login" }} />
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Links