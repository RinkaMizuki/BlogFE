import AuthRequire from "../HOC/AuthRequire";
import { default as config } from "../config/config";
import { About, Detail, Home, Login, Notfound, Register, Newsletter, Profile, ResetPassword } from "../pages";

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
    element: AuthRequire(Newsletter),
  },
  about: {
    path: config.about,
    element: About,
  },
  profile: {
    path: config.profile,
    element: AuthRequire(Profile),
  },
  resetPassword: {
    path: config.resetPassword,
    element: ResetPassword,
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