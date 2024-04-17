import { loginwithGithub, loginwithGoogle } from "@/lib/action";

import React from "react";
import Link from "next/link";
import LoginForm from "@/Component/LoginForm/LoginForm";

const Login = async () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center text-4xl font-bold text-[#6C63FF] p-4">
        Log-In
      </h1>
      <LoginForm />
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
