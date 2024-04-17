"use client"
import { login } from '@/lib/action'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined)

    // const router = useRouter();
    // useEffect(()=>{
    //     state?.success && router.push('/');
    // },[state?.success, router])


    return (
        <form className="flex flex-col gap-3 w-full max-w-full mx-auto p-2" action={formAction}>
            {/* <label>Email</label> */}
            <input
                type="text"
                className="w-96 max-[425px]:w-72 p-3 outline-none text-black rounded-lg hover:border-b-4 hover:border-[#6C63FF]"
                placeholder="Valid username"
                name="username"
            />
            {/* <label htmlFor="">Password</label> */}
            <input
                type="password"
                className="w-96 max-[425px]:w-72 p-3 outline-none text-black  rounded-lg hover:border-b-4 hover:border-[#6C63FF]"
                placeholder="password"
                name="password"
            />
            <button className="bg-[#6C63FF] p-3 rounded-lg border-2 border-[#6C63FF] hover:bg-transparent transition-all duration-700 ease-in-out">
                LogIn
            </button>
            <p className='text-center text-red-600'>{state?.error}</p>
        </form>
    )
}

export default LoginForm