import { AxiosRequestConfig, httpRequest } from "../utils/httpRequest";

const updateUserProfile = async (path: string, data: FormData, options: AxiosRequestConfig = {}) => {
  const res = await httpRequest.post(path, data, options);
  return res.data;
}



export { updateUserProfile }