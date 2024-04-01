import { loginwithGithub, loginwithGoogle } from "@/lib/action";

import React from "react";
import Link from "next/link";

const Login = async () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center text-4xl font-bold text-[#6C63FF] p-4">
        Log-In
      </h1>
      <form className="flex flex-col gap-3 w-full max-w-full mx-auto p-2">
        {/* <label>Email</label> */}
        <input
          type="email"
          className="w-96 max-[425px]:w-72 p-3 outline-none text-black rounded-lg hover:border-b-4 hover:border-[#6C63FF]"
          placeholder="Valid Email Address"
        />
        {/* <label htmlFor="">Password</label> */}
        <input
          type="password"
          className="w-96 max-[425px]:w-72 p-3 outline-none text-black  rounded-lg hover:border-b-4 hover:border-[#6C63FF]"
          placeholder="password"
        />
        <button className="bg-[#6C63FF] p-3 rounded-lg border-2 border-[#6C63FF] hover:bg-transparent transition-all duration-700 ease-in-out">
          LogIn
        </button>
      </form>
      <form
        action={loginwithGoogle}
        className="flex flex-col gap-2 w-full max-w-full mx-auto px-2 pb-2"
      >
        <button className="bg-[#6C63FF] p-3 rounded-lg border-2 border-[#6C63FF] hover:bg-transparent transition-all duration-700 ease-in-out">
          Sign-In with Google
        </button>
      </form>
      <form
        action={loginwithGithub}
        className="flex flex-col gap-2 w-full max-w-full mx-auto px-2"
      >
        <button className="bg-[#6C63FF] p-3 rounded-lg border-2 border-[#6C63FF] hover:bg-transparent transition-all duration-700 ease-in-out">
          Sign-In with Github
        </button>
      </form>
      <p className="pt-2 px-2">
        Don't Have an Account?{" "}
        <Link href="/register" className="text-[#6C63FF]">
          Login Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
