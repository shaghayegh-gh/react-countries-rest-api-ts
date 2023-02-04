import { paths } from "./route-path";
import Home from "../pages/home";

export const routes = [
  {
    path: paths.home,
    element: <Home />,
    exact: true,
  },
];
