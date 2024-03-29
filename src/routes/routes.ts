import { default as config } from "../config/config";
import Home from "../pages/Home";

const routes = {
  home: {
    path: config.home,
    element: Home,
  },
}

export { routes }