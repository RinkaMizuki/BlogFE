import axios, { AxiosRequestConfig } from "axios";

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BLOG_BASE_URL,
  withCredentials: true,
})

export { type AxiosRequestConfig, httpRequest }