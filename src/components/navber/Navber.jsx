import { Link, NavLink } from "react-router";

const Navber = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-job">All Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/add-job">Add Job</NavLink>
      </li>
      <li>
        <NavLink to="/my-accepted-task">My Accepted Tasks</NavLink>
      </li>
     
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className=" text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/auth/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/auth/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navber;
