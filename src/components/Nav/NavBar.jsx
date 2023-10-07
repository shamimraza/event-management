import { NavLink } from "react-router-dom";
import { AiOutlineGooglePlus } from "react-icons/ai";
import icon from "../../assets/../assets/1000_F_97000073_qnDFUJdLGmxr3sIXe0CHv0MT1LbYuQKb.jpg";

const NavBar = () => {
  const pages = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
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
        <button className="btn btn-outline btn-accent">
          <AiOutlineGooglePlus className="text-3xl text-amber-500 border-amber-300"></AiOutlineGooglePlus>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
