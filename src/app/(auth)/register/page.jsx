import { loginwithGithub, loginwithGoogle } from "@/lib/action";
import React from "react";
import Link from "next/link";
import RegisterForm from "@/Component/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center text-4xl font-bold text-[#6C63FF] pb-4">
        Register
      </h1>
      <RegisterForm />
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
