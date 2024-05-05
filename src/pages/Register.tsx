import { useContext } from "react";
import { ColorModeContext } from "../App";
import { Link } from "react-router-dom";
import blogLogo from "../assets/images/blogger.png";

const Register = () => {

  const { mode } = useContext(ColorModeContext);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center">
          <img
            className="mx-auto h-16 w-auto"
            src={blogLogo}
            alt="Blog Logo"
          />
          <h2 className={`mt-7 text-center text-2xl font-bold leading-9 tracking-tight  ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="username" className={`block text-sm font-medium leading-6 ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  placeholder="Enter your username"
                  autoComplete="username"
                  required
                  className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-zinc-200 border-solid outline-none focus:border-2 focus:border-solid focus:border-[#4f46e5]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium leading-6 ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-zinc-200 border-solid outline-none focus:border-2 focus:border-solid focus:border-[#4f46e5]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={`block text-sm font-medium leading-6 ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-zinc-200 border-solid outline-none focus:border-2 focus:border-solid focus:border-[#4f46e5]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirmPassword" className={`block text-sm font-medium leading-6 ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
                  Confirm password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="confirmPassword"
                  placeholder="Enter your confirm password"
                  autoComplete="confirm-password"
                  required
                  className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-zinc-200 border-solid outline-none focus:border-2 focus:border-solid focus:border-[#4f46e5]"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-none"
              >
                Sign in
              </button>
            </div>
            <div className="text-sm flex justify-center items-center flex-col gap-2">
              <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Do you already have an account? <span className="underline">Login</span>
              </Link>
              <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default Register;
