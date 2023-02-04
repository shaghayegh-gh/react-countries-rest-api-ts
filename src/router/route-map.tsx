import { paths } from "./route-path";
import Home from "../pages/home";
import Country from "../pages/country";

export const routes = [
  {
    path: paths.home,
    element: <Home />,
    exact: true,
  },
  {
    path: paths.country(":name"),
    element: <Country />,
  }
];
