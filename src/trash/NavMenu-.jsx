import { NavLink } from "react-router-dom";

export const NavMenu = (props) => {
  const { flexCol, isOpen } = props;
  return (
    <>
      <ul
        className={
          flexCol ? `flexBox text-lg  flex-col ` : `flexBox text-lg ml-10`
        }
      >
        <li
          className={
            flexCol
              ? `hover:underline hover:text-gray-100`
              : `mr-5 hover:underline hover:text-gray-100`
          }
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-gray-300" : "")}
          >
            Home
          </NavLink>
        </li>
        <li
          className={
            flexCol
              ? `hover:underline hover:text-gray-100`
              : `mr-5 hover:underline hover:text-gray-100`
          }
        >
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-gray-300" : "")}
          >
            About
          </NavLink>
        </li>
        <li className="hover:underline hover:text-gray-100">
          <NavLink
            to="/mysite"
            className={({ isActive }) => (isActive ? "text-gray-300" : "")}
          >
            My Site
          </NavLink>
        </li>
      </ul>
    </>
  );
};
