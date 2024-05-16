import { AxiosRequestConfig, httpRequest } from "../utils/httpRequest"

const get = async (path: string, option: AxiosRequestConfig = {}) => {
  const res = await httpRequest.get(path, option)
  return res.data;
}

const post = async (path: string, data: any, option: AxiosRequestConfig = {}) => {
  const res = await httpRequest.post(path, data, option)
  return res.data;
}

export { get, post }