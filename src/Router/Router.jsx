import { createBrowserRouter } from "react-router-dom";
import Main from "../components/LayOut/Main";
import ErrorPage from "../Error/ErrorPage";
import Home from "../components/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
