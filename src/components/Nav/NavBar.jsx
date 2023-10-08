import { Link, NavLink } from "react-router-dom";
import icon from "../../assets/../assets/1000_F_97000073_qnDFUJdLGmxr3sIXe0CHv0MT1LbYuQKb.jpg";
import navImage from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const NavBar = () => {
  const { user, logOut, googleLogin } = useContext(AuthContext);

  const googleHandleButton = () => {
    googleLogin();
  };

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const pages = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/event">Event</NavLink>
      </li>
      <li>
        <NavLink to="/teacher">Teacher</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {pages}
          </ul>
        </div>
        <div className="flex items-center ">
          <img className="w-20 h-20" src={icon} alt="" />
          <h2>
            <span className="text-3xl font-bold text-amber-500">Event</span>
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{pages}</ul>
      </div>

      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user?.photoURL || navImage} />
          </div>
        </label>
        <div className="ml-2">
          {user ? (
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
      <div className="ml-6">
        <button
          onClick={googleHandleButton}
          className="btn btn-outline btn-info"
        >
          <FcGoogle className="text-3xl"></FcGoogle>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
