import { RegisterState } from "../types";
import { AxiosRequestConfig, httpRequest } from "../utils/httpRequest";

const register = async (path: string, data: RegisterState, options: AxiosRequestConfig) => {
  const res = await httpRequest.post(path, data, options);
  return res.data;
}

export { register }