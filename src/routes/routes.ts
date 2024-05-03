import { default as config } from "../config/config";
import { About, Detail, Home, Notfound } from "../pages";
import { Newsletter } from "../pages";

const routes = {
  home: {
    path: config.home,
    element: Home,
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