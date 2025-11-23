import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContex";

const Navber = () => {
  const { logOut,user } = use(AuthContext);
  const handleLogout = () => {
    logOut().then(() => {
      // console.log("logout success");
    });
    // .catch((err) => {
    //   // console.log(err);
    // });
  };
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
      <div className="navbar bg-base-100 shadow-sm p-0 px-4 md:px-6 lg:px-20 ">
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
          {/* <Link to="/auth/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/auth/register" className="btn btn-secondary">
            Register
          </Link>
          <button onClick={handleLogout} className="btn btn-neutral">
            Logout
          </button> */}
          {user ? (
            <div className="dropdown dropdown-left">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-full  flex items-center gap-2 m-1 "
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
                <h2 className="font-medium">{user?.displayName}</h2>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <h4 className="font-semibold">{user?.displayName}</h4>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 font-semibold text-lg"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/auth/login" className="btn btn-outline">
                Login
              </Link>
              <Link to="/auth/register"  className="btn btn-primary">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navber;
