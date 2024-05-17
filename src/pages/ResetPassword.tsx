import { useContext, useRef, useState } from "react";
import { ColorModeContext } from "../App";
import ValidateError from "../components/ValidateError/ValidateError";
import LoadingBtn from "../components/LoadingBtn/LoadingBtn";
import Button from "../components/Button";
import { passwordValidation } from "../regex";
import { resetPassword } from "../services/authService";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { toastOptions } from "./Register";
export interface ResetPasswordState {
  password: string,
  password_confirmation?: string,
}
const ResetPassword = () => {
  const [passwordInfo, setPasswordInfo] = useState<ResetPasswordState>({
    password: "",
    password_confirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const passwordErrorRef = useRef<HTMLSpanElement>(null);
  const confirmPasswordErrorRef = useRef<HTMLSpanElement>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const passwordValidate = () => {
    const isValidPassword: boolean = passwordValidation(passwordInfo.password);
    const isMatchesPassword: boolean = passwordInfo.password === passwordInfo.password_confirmation;
    if (confirmPasswordErrorRef.current) {
      if (!isMatchesPassword && isValidPassword) {
        confirmPasswordErrorRef.current.innerHTML = "Confirm password does not match.";
      }
      else {
        confirmPasswordErrorRef.current.innerHTML = "";
      }
    }
    if (passwordErrorRef.current) {
      if (!passwordInfo.password) {
        passwordErrorRef.current.innerHTML = "Password field require."
        return
      }
      if (!isValidPassword) {
        passwordErrorRef.current.innerHTML = "Password incorrect format."
      } else {
        passwordErrorRef.current.innerHTML = ""
      }
    }
    return isValidPassword && isMatchesPassword && passwordInfo.password;
  }
  const handleResetPassword = async () => {
    if (!passwordValidate()) {
      return;
    }
    try {
      setLoading(true);
      const res = await resetPassword('/reset-password', passwordInfo, {
        params: {
          email: searchParams.get("email"),
          token: searchParams.get("token"),
        }
      })
      toast.info(res.message, toastOptions);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const { mode } = useContext(ColorModeContext);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center">
          <h2 className={`mt-7 text-center text-2xl font-bold leading-9 tracking-tight  ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
            Reset your password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
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
                    setPasswordInfo(prevInfo => {
                      return {
                        ...prevInfo,
                        password: e.target.value,
                      }
                    })
                  }
                  }
                  value={passwordInfo.password}
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
                <label htmlFor="password_confirmation" className={`block text-sm font-medium leading-6 ${mode !== 'light' ? "text-[#ffffff]" : "text-[#090D1F]"}`}>
                  Confirm password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  onChange={(e: any & { target: HTMLInputElement }) => {
                    if (confirmPasswordErrorRef.current) {
                      confirmPasswordErrorRef.current.innerHTML = ""
                    }
                    setPasswordInfo(prevInfo => {
                      return {
                        ...prevInfo,
                        password_confirmation: e.target.value,
                      }
                    })
                  }}
                  value={passwordInfo.password_confirmation}
                  id="password_confirmation"
                  name="password_confirmation"
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
                onClick={handleResetPassword}
              >
                Reset Password
              </Button> :
                <LoadingBtn />
              }
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default ResetPassword;
