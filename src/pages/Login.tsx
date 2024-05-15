import { useContext, useRef, useState } from "react";
import { ColorModeContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import blogLogo from "../assets/images/blogger.png";
import { ToastContainer, toast } from "react-toastify";
import ValidateError from "../components/ValidateError/ValidateError";
import { emailValidation } from "../regex";
import Button from "../components/Button";
import { LoginState } from "../types";
import { loginUser } from "../redux/auth/authAction";
import { useAppDispatch } from "../hooks";
import { toastOptions } from "./Register";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const [userLoginInfo, setUserLoginInfo] = useState<LoginState>({
    email: "",
    password: "",
  });
  const emailErrorRef = useRef<HTMLSpanElement>(null);
  const passwordErrorRef = useRef<HTMLSpanElement>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mode } = useContext(ColorModeContext);
  const emailValidate = () => {
    const isValidEmail: boolean = emailValidation(userLoginInfo.email);
    if (emailErrorRef.current) {
      if (!userLoginInfo.email) {
        emailErrorRef.current.innerHTML = "Email field require."
      }
      else if (!isValidEmail && userLoginInfo.email) {
        emailErrorRef.current.innerHTML = "Email incorrect format."
      }
      else {
        emailErrorRef.current.innerHTML = ""
      }
    }
    return isValidEmail && userLoginInfo.email
  }

  const passwordValidate = () => {
    if (passwordErrorRef.current) {
      if (!userLoginInfo.password) {
        passwordErrorRef.current.innerHTML = "Password field require."
      }
      else {
        passwordErrorRef.current.innerHTML = ""
      }
    }
    return userLoginInfo.password;
  }

  const handleLoginUser = async () => {
    const isValidPassword = passwordValidate()
    const isValidEmail = emailValidate()
    if (!isValidPassword || !isValidEmail) {
      return
    }
    dispatch(loginUser(userLoginInfo)).then((res) => {
      if (res.type === "auth/login/fulfilled") {
        console.log(res);

        toast.info(res.payload?.message, toastOptions)
        navigate('/')
        return
      }
      toast.error(res.payload?.message, toastOptions)
    })
  }

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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className={`block text-sm font-medium leading-6 ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e: any & { target: HTMLInputElement }) => {
                    if (emailErrorRef.current) {
                      emailErrorRef.current.innerHTML = ""
                    }
                    setUserLoginInfo(prevInfo => {
                      return {
                        ...prevInfo,
                        email: e.target.value,
                      }
                    })
                  }}
                  value={userLoginInfo.email}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-zinc-200 border-solid outline-none focus:border-2 focus:border-solid focus:border-[#4f46e5]"
                />
                <ValidateError ref={emailErrorRef} />
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
                  onChange={(e: any & { target: HTMLInputElement }) => {
                    if (passwordErrorRef.current) {
                      passwordErrorRef.current.innerHTML = ""
                    }
                    setUserLoginInfo(prevInfo => {
                      return {
                        ...prevInfo,
                        password: e.target.value,
                      }
                    })
                  }
                  }
                  value={userLoginInfo.password}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-zinc-200 border-solid outline-none focus:border-2 focus:border-solid focus:border-[#4f46e5]"
                />
                <ValidateError ref={passwordErrorRef} />
              </div>
            </div>

            <div>
              <Button onClick={handleLoginUser}>Login</Button>
            </div>
            <div className="text-sm flex justify-center items-center flex-col gap-2">
              <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Don't have account? <span className="underline text-white ">Signup</span>
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

export default Login;
