import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContex";
import { Briefcase } from "lucide-react";

const Navber = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogout = () => {
    logOut().then(() => {});
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      {[
        { to: "/", label: "Home" },
        { to: "/all-job", label: "All Jobs" },
        { to: "/add-job", label: "Add Job" },
        { to: "/my-added-jobs", label: "My Posted Jobs" },
        { to: "/my-accepted-task", label: "My Accepted Tasks" },
      ].map((link) => (
        <li key={link.to}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive
                  ? "bg-[#0B74FF] text-white"
                  : "text-gray-700 hover:bg-[#0B74FF] hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <>
      {/* Fixed Glass Navbar */}
      <div
        className={`fixed w-full z-50 top-0 bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200 transition-all duration-300 ${
          isScrolled ? "py-1" : "py-3"
        }`}
      >
        <div className="navbar w-full md:w-11/12 lg:w-10/12 mx-auto px-4 md:px-6 lg:px-20 transition-all duration-300">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box shadow-lg mt-3 w-52 p-2"
              >
                {navLinks}
              </ul>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={`bg-[#0B74FF] flex justify-center items-center rounded-full shadow-md transition-all duration-300 ${
                isScrolled ? "h-10 w-10" : "h-14 w-14"
              }`}
            >
              <Briefcase
                size={isScrolled ? 24 : 30}
                color="#ffffff"
                strokeWidth={1.5}
              />
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-left">
                <label
                  tabIndex={0}
                  className="btn btn-ghost rounded-full flex items-center gap-2"
                >
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className={`rounded-full border-2 border-gray-300 transition-all duration-300 ${
                      isScrolled ? "w-6 h-6" : "w-8 h-8"
                    }`}
                  />
                  <span
                    className={`hidden md:inline font-medium transition-all duration-300 ${
                      isScrolled ? "text-sm" : "text-base"
                    }`}
                  >
                    {user.displayName}
                  </span>
                </label>
                <ul className="dropdown-content menu bg-white/80 backdrop-blur-md rounded-box shadow-md w-52 p-2 mt-1">
                  <li>
                    <h4 className="font-semibold">{user.displayName}</h4>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-red-500 font-semibold hover:text-red-700 transition-colors"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/auth/login"
                  className="btn btn-outline hover:bg-[#0B74FF] hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="btn btn-primary hover:bg-blue-700 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-24"></div>
    </>
  );
};

export default Navber;
