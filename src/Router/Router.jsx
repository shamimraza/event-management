import { createBrowserRouter } from "react-router-dom";
import Main from "../components/LayOut/Main";
import ErrorPage from "../Error/ErrorPage";
import Home from "../components/Home/Home";
import Details from "../details/Details";
import Login from "../Login/Login";
import Register from "../Login/Register/Register";
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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/detail/:id",
        element: <Details></Details>,
        loader: () => fetch("/services.json"),
      },
    ],
  },
]);
export default router;
