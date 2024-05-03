import { default as config } from "../config/config";
import { About, Home } from "../pages";
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
  }
}

export { routes }