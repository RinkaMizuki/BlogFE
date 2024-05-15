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

export { register, login }