import { NavLink } from "react-router-dom";

export const NavMenu = () => {
  return (
    <>
      <ul className={`flexBox text-lg ml-10`}>
        <li className={`mr-5 hover:underline hover:text-white`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className={`mr-5 hover:underline hover:text-white`}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            About
          </NavLink>
        </li>
        <li className="hover:underline hover:text-white">
          <NavLink
            to="/mysite"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            My Site
          </NavLink>
        </li>
      </ul>
    </>
  );
};
