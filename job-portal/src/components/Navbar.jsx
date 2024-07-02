import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";
import onlylogo from "../assets/only_logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("Logout successful!");
      navigate("/");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/Home", title: "Companies" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    <header className="max-w-screen-2xl mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <Link to="/" className="flex items-center gap-2 text-2xl font-semibold">
          <img src={onlylogo} alt="Seekify Logo" width="46" height="50" />
          <span>Seekify</span>
        </Link>

        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="mx-auto lg:mx-0  text-gray-800 focus:shadow-outline transform transition text-md hover:scale-105 duration-300 ease-in-out"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-base text-primary font-medium space-x-5 hidden lg:flex items-center">
          {user ? (
            <>
              <div className="flex items-center gap-4">
                <img
                  className="h-8 w-8 rounded-full ring-2 ring-white"
                  src={
                    user.photoURL ||
                    "https://www.seekpng.com/png/detail/413-4139803_unknown-profile-profile-picture-unknown.png"
                  }
                  alt="User Avatar"
                />
                <span className="text-gray-800">{user.displayName}</span>
                <button
                  onClick={handleLogout}
                  className="py-2 px-5 border border-blue rounded hover:bg-[#102c57] hover:text-white transition duration-300"
                >
                  Log out
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="py-2 px-5 border border-blue rounded hover:bg-[#102c57] hover:text-white transition duration-300"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="gradient py-2 px-5 text-white rounded hover:bg-darkBlue transition duration-300"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6 text-primary/75" />
            ) : (
              <FaBarsStaggered className="w-6 h-6 text-primary/75" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } px-4 bg-gray-800 py-5 rounded-lg shadow-lg`}
      >
        <ul className="space-y-4">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white py-1">
              <NavLink
                onClick={handleMenuToggler}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold"
                    : "hover:text-gray-300 transition duration-300"
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
          {user ? (
            <>
              <li className="text-white py-1">
                <button
                  onClick={() => {
                    handleLogout();
                    handleMenuToggler();
                  }}
                  className="w-full text-left hover:text-gray-300 transition duration-300"
                >
                  Log out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="text-white py-1">
                <Link
                  to="/login"
                  onClick={handleMenuToggler}
                  className="hover:text-gray-300 transition duration-300"
                >
                  Log in
                </Link>
              </li>
              <li className="text-white py-1">
                <Link
                  to="/register"
                  onClick={handleMenuToggler}
                  className="hover:text-gray-300 transition duration-300"
                >
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
