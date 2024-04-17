"use client"
import { register } from '@/lib/action'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'

const RegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined)

    const router = useRouter();
    useEffect(()=>{
        state?.success && router.push('/login');
    },[state?.success, router])

    return (
        <form
            className="flex flex-col gap-4 w-full max-w-full mx-auto p-2"
            action={formAction}
        >
            {/* <label>UserName</label> */}
            <input
                type="text"
                className="w-96 max-[425px]:w-72 p-3 outline-none text-black rounded-lg hover:border-b-4 hover:border-[#6C63FF]"
                placeholder="Full Name"
                name="username"
            />
            {/* <label>Email</label> */}
            <input
                type="email"
                className="w-96 max-[425px]:w-72 p-3 outline-none text-black rounded-lg hover:border-b-4 hover:border-[#6C63FF]"
                placeholder="Email Address"
                name="email"
            />
            {/* <label htmlFor="">Password</label> */}
            <input
                type="password"
                className="w-96 max-[425px]:w-72 p-3 outline-none text-black  rounded-lg hover:border-b-4 hover:border-[#6C63FF]"
                placeholder="password"
                name="password"
            />
            {/* <label htmlFor="">Confirm Password</label> */}
            <input
                type="password"
                className="w-96 max-[425px]:w-72 p-3 outline-none text-black  rounded-lg hover:border-b-4 hover:border-[#6C63FF]"
                placeholder="Confirm password"
                name="passwordRepeat"
            />
            <button className="bg-[#6C63FF] p-3 rounded-lg border-2 border-[#6C63FF] hover:bg-transparent transition-all duration-700 ease-in-out">
                Register
            </button>
            <p className='text-center text-red-600'>{state?.error}</p>
        </form>
    )
}

export default RegisterForm