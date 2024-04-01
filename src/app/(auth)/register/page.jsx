import { loginwithGithub, loginwithGoogle, register } from "@/lib/action";
import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center text-4xl font-bold text-[#6C63FF] pb-4">
        Register
      </h1>
      <form
        className="flex flex-col gap-4 w-full max-w-full mx-auto p-2"
        action={register}
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
      </form>
      <form action={loginwithGoogle} className="flex flex-col gap-2 w-full max-w-full mx-auto px-2 pb-2">
        <button         
          className="bg-[#6C63FF] p-3 rounded-lg border-2 border-[#6C63FF] hover:bg-transparent transition-all duration-700 ease-in-out"
        >
          Sign-In with Google
        </button>
      </form>
      <form action={loginwithGithub} className="flex flex-col gap-2 w-full max-w-full mx-auto px-2">
      <button
          className="bg-[#6C63FF] p-3 rounded-lg border-2 border-[#6C63FF] hover:bg-transparent transition-all duration-700 ease-in-out"
        >
          Sign-In with Github
        </button>
      </form>
      <p className="pt-2 px-2">
        Already Have an Account?{" "}
        <Link href="/login" className="text-[#6C63FF]">
          Log-In
        </Link>
      </p>
    </div>
  );
};

export default Register;
