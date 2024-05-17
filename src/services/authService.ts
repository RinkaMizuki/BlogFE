import { ResetPasswordState } from "../pages/ResetPassword";
import { LoginState, RegisterState } from "../types";
import { AxiosRequestConfig, httpRequest } from "../utils/httpRequest";

const register = async (path: string, data: RegisterState, options: AxiosRequestConfig) => {
  const res = await httpRequest.post(path, data, options);
  return res.data;
}

const login = async (path: string, data: LoginState, options: AxiosRequestConfig) => {
  const res = await httpRequest.post(path, data, options);
  return res.data;
}

const logout = async (path: string, options: AxiosRequestConfig) => {
  const res = await httpRequest.get(path, options);
  return res.data;
}

const forgotPassword = async (path: string, options: AxiosRequestConfig) => {
  const res = await httpRequest.get(path, options);
  return res.data;
}

const resetPassword = async (path: string, data: ResetPasswordState, options: AxiosRequestConfig) => {
  const res = await httpRequest.post(path, data, options);
  return res.data;
}


export { register, login, logout, forgotPassword, resetPassword }