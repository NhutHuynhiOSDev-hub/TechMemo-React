import InputField from "@/components/InputField";
import React from "react";
import googleLogo from "@/assets/imgs/google.png";
import { Link } from "react-router";

function Login() {
  return (
    <section className="w-full h-screen px-10 lg:px-20 flex items-center justify-center">
      <form className="w-[80%] max-w-[400px]">
        <h1 className="text-4xl font-gelasio text-center capitalize mb-24">
          Welcome Back
        </h1>
        <div className="flex flex-col gap-5 items-center justify-center">
          <InputField name="Email" type="email" placeHolder="Email" />
          <InputField name="Password" type="password" placeHolder="Password" />
        </div>
        <button className="whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-base capitalize hover:bg-opacity-80 mt-14 block mx-auto">
          Sign In
        </button>
        <div className="relative w-full flex items-center gap-2 md:gap-5 my-10 opacity-10 uppercase text-black font-bold">
          <hr className="w-1/2 border-black" />
          <p>or</p>
          <hr className="w-1/2 border-black" />
        </div>
        <button className="flex w-[90%] items-center justify-center center whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-base capitalize hover:bg-opacity-80 mt-14 mx-auto gap-4">
          <img src={googleLogo} className="w-5" />
          Continue with Google
        </button>
        <p className="mt-6 text-center text-gray-500 text-base">
          Don't have an account?
          <Link
            to="/signup"
            className="underline text-black text-base ml-1 mt-1"
          >
            Join us today
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
