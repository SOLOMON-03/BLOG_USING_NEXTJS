"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link href={item.path} className={(pathName === item.path) ? "bg-white text-black px-4 py-2 rounded-full transition-all duration-500 ease-in-out animate-pulse": ""}>{item.title}</Link>
  )
}

export default NavLinks