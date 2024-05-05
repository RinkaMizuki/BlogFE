import { default as config } from "../config/config";
import { About, Detail, Home, Login, Notfound, Register } from "../pages";
import { Newsletter } from "../pages";

const routes = {
  home: {
    path: config.home,
    element: Home,
  },
  login: {
    path: config.login,
    element: Login
  },
  register: {
    path: config.register,
    element: Register
  },
  newsletter: {
    path: config.newsletter,
    element: Newsletter,
  },
  about: {
    path: config.about,
    element: About,
  },
  detail: {
    path: config.detail,
    element: Detail
  },
  notfound: {
    path: config.notfound,
    element: Notfound
  }
}

export { routes }