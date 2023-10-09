import { createBrowserRouter } from "react-router-dom";
import Main from "../components/LayOut/Main";
import ErrorPage from "../Error/ErrorPage";
import Home from "../components/Home/Home";
import Details from "../details/Details";
import Login from "../Login/Login";
import Register from "../Login/Register/Register";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes";
import Event from "../event/Event";
import Privet from "./PrivetRoutes/Privet";
import Speakers from "../Speakers/Speakers";
import RouterPrivet from "./PrivetRoutes/RouterPrivet";
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
        path: "/event",
        element: (
          <Privet>
            <Event></Event>
          </Privet>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/speakers",
        element: (
          <RouterPrivet>
            <Speakers></Speakers>
          </RouterPrivet>
        ),
      },
      {
        path: "/detail/:id",
        element: (
          <PrivetRoutes>
            <Details></Details>
          </PrivetRoutes>
        ),
        loader: () => fetch("/services.json"),
      },
    ],
  },
]);
export default router;
