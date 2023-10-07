import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavBar from "../Nav/NavBar";

const Main = () => {
  return (
    <div className="w-11/12 mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
