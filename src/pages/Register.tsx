import { useContext, useRef, useState } from "react";
import { ColorModeContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import blogLogo from "../assets/images/blogger.png";
import { useAppDispatch, useAppSelector } from "../hooks";
import { registerUser } from "../redux/auth/authAction";
import LoadingBtn from "../components/LoadingBtn/LoadingBtn";
import { ToastOptions, toast } from "react-toastify";
import { emailValidation, passwordValidation, phoneValidation } from "../regex";
import 'react-toastify/dist/ReactToastify.css';
import ValidateError from "../components/ValidateError/ValidateError";
import Button from "../components/Button";
import { ForgotPassword } from "../components/Model";

interface RegisterData {
  username: string,
  password: string,
  email: string,
  phone: string,
  confirmPassword?: string,
}
export const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
} as ToastOptions;

const Register = () => {
  const [userInfo, setUserInfo] = useState<RegisterData>({
    username: "",
    password: "",
    email: "",
    phone: "",
    confirmPassword: "",
  });
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const userNameErrorRef = useRef<HTMLSpanElement>(null);
  const emailErrorRef = useRef<HTMLSpanElement>(null);
  const phoneErrorRef = useRef<HTMLSpanElement>(null);
  const passwordErrorRef = useRef<HTMLSpanElement>(null);
  const confirmPasswordErrorRef = useRef<HTMLSpanElement>(null);

  const { mode } = useContext(ColorModeContext);

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(state => state.auth);
  const navigate = useNavigate();


  const passwordValidate = () => {
    const isValidPassword: boolean = passwordValidation(userInfo.password);
    const isMatchesPassword: boolean = userInfo.password === userInfo.confirmPassword;
    if (confirmPasswordErrorRef.current) {
      if (!isMatchesPassword && isValidPassword) {
        confirmPasswordErrorRef.current.innerHTML = "Confirm password does not match.";
      }
      else {
        confirmPasswordErrorRef.current.innerHTML = "";
      }
    }
    if (passwordErrorRef.current) {
      if (!userInfo.password) {
        passwordErrorRef.current.innerHTML = "Password field require."
        return
      }
      if (!isValidPassword) {
        passwordErrorRef.current.innerHTML = "Password incorrect format."
      } else {
        passwordErrorRef.current.innerHTML = ""
      }
    }
    return isValidPassword && isMatchesPassword && userInfo.password;
  }

  const emailValidate = () => {
    const isValidEmail: boolean = emailValidation(userInfo.email);
    if (emailErrorRef.current) {
      if (!userInfo.email) {
        emailErrorRef.current.innerHTML = "Email field require."
      }
      else if (!isValidEmail && userInfo.email) {
        emailErrorRef.current.innerHTML = "Email incorrect format."
      }
      else {
        emailErrorRef.current.innerHTML = ""
      }
    }
    return isValidEmail && userInfo.email
  }

  const phoneValidate = () => {
    const isValidPhone: boolean = phoneValidation(userInfo.phone);
    if (phoneErrorRef.current) {
      if (!userInfo.phone) {
        phoneErrorRef.current.innerHTML = "Phone field require."
      }
      else if (!isValidPhone && userInfo.phone) {
        phoneErrorRef.current.innerHTML = "Phone incorrect format."
      }
      else {
        phoneErrorRef.current.innerHTML = ""
      }
    }
    return isValidPhone && userInfo.phone
  }

  const usernameValidate = () => {
    if (userNameErrorRef.current) {
      if (!userInfo.username) {
        userNameErrorRef.current.innerHTML = "Username field require."
      }
      else {
        userNameErrorRef.current.innerHTML = ""
      }
    }
    return !!userInfo.username;
  }

  const handleRegisterUser = async () => {
    const isUsernameValid = usernameValidate();
    const isEmailValid = emailValidate();
    const isPhoneNumber = phoneValidate();
    const isPasswordValid = passwordValidate();
    if (!isUsernameValid || !isEmailValid || !isPhoneNumber || !isPasswordValid) {
      return
    }
    const data = {
      username: userInfo.username,
      email: userInfo.email,
      phone: userInfo.phone,
      password: userInfo.password
    }
    dispatch(registerUser(data)).then((res) => {
      navigate('/login')
      toast.info(res.payload?.message, toastOptions);
    });
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
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className={`block text-sm font-medium leading-6 ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
                User name
              </label>
              <div className="mt-2 relative">
                <input
                  onChange={(e: any & { target: HTMLInputElement }) => {
                    if (userNameErrorRef?.current) {
                      userNameErrorRef.current.innerHTML = ""
                    }
                    setUserInfo(prevInfo => {
                      return {
                        ...prevInfo,
                        username: e.target.value,
                      }
                    })
                  }}
                  value={userInfo.username}
                  id="username"
                  name="username"
                  type="username"
                  placeholder="Ex: abc"
                  autoComplete="username"
                  required
                  className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-zinc-200 border-solid outline-none focus:border-2 focus:border-solid focus:border-[#4f46e5]"
                />
                <ValidateError ref={userNameErrorRef} />
              </div>
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium leading-6 ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
                Email address
              </label>
              <div className="mt-2 relative">
                <input
                  onChange={(e: any & { target: HTMLInputElement }) => {
                    if (emailErrorRef.current) {
                      emailErrorRef.current.innerHTML = ""
                    }
                    setUserInfo(prevInfo => {
                      return {
                        ...prevInfo,
                        email: e.target.value,
                      }
                    })
                  }}
                  id="email"
                  name="email"
                  type="email"
                  value={userInfo.email}
                  placeholder="Ex: blog@gmail.com"
                  autoComplete="email"
                  required
                  className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-zinc-200 border-solid outline-none focus:border-2 focus:border-solid focus:border-[#4f46e5]"
                />
                <ValidateError ref={emailErrorRef}></ValidateError>
              </div>
            </div>
            <div>
              <label htmlFor="phone" className={`block text-sm font-medium leading-6 ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
                Phone number
              </label>
              <div className="mt-2 relative">
                <input
                  onChange={(e: any & { target: HTMLInputElement }) => {
                    if (phoneErrorRef.current) {
                      phoneErrorRef.current.innerHTML = "";
                    }
                    setUserInfo(prevInfo => {
                      return {
                        ...prevInfo,
                        phone: e.target.value,
                      }
                    })
                  }}
                  value={userInfo.phone}
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Ex: 0867706538"
                  autoComplete="phone"
                  required
                  className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-zinc-200 border-solid outline-none focus:border-2 focus:border-solid focus:border-[#4f46e5]"
                />
                <ValidateError ref={phoneErrorRef} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={`block text-sm font-medium leading-6 ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  onChange={(e: any & { target: HTMLInputElement }) => {
                    if (passwordErrorRef.current) {
                      passwordErrorRef.current.innerHTML = ""
                    }
                    setUserInfo(prevInfo => {
                      return {
                        ...prevInfo,
                        password: e.target.value,
                      }
                    })
                  }
                  }
                  value={userInfo.password}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Ex: Ab123@"
                  autoComplete="current-password"
                  required
                  className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-zinc-200 border-solid outline-none focus:border-2 focus:border-solid focus:border-[#4f46e5]"
                />
                <ValidateError ref={passwordErrorRef} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirmPassword" className={`block text-sm font-medium leading-6 ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
                  Confirm password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  onChange={(e: any & { target: HTMLInputElement }) => {
                    if (confirmPasswordErrorRef.current) {
                      confirmPasswordErrorRef.current.innerHTML = ""
                    }
                    setUserInfo(prevInfo => {
                      return {
                        ...prevInfo,
                        confirmPassword: e.target.value,
                      }
                    })
                  }}
                  value={userInfo.confirmPassword}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Ex: Ab123@"
                  autoComplete="confirm-password"
                  required
                  className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-zinc-200 border-solid outline-none focus:border-2 focus:border-solid focus:border-[#4f46e5]"
                />
                <ValidateError ref={confirmPasswordErrorRef} />
              </div>
            </div>
            <div>
              {!loading ? <Button
                onClick={handleRegisterUser}
              >
                Register
              </Button> :
                <LoadingBtn />
              }
            </div>
            <div className="text-sm flex justify-center items-center flex-col gap-2">
              <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Do you already have an account? <span className="underline text-white">Login</span>
              </Link>
              <ForgotPassword
                isOpen={open}
                handleClose={handleClose}
                children={<div className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer" onClick={handleOpen}>
                  Forgot password?
                </div>}
              />
            </div>
          </form>
        </div >
      </div >
    </>
  )
};

export default Register;
