import { memo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NavMenu } from "../atoms/NavMenu";
import { Link as Scroll } from "react-scroll";

export const ScrollHeader = memo(() => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <header
        className={`shadow-lg z-10 fixed top-0 w-full flex items-center justify-between bg-amber-200 h-12`}
      >
        <div className="mr-10">
          <NavMenu />
        </div>
        <ul className={pathname === "/" ? `flexBox text-lg ml-10` : `hidden`}>
          <li className="mr-5 hover:underline hover:text-gray-100">
            <Scroll to="top" smooth={true} duration={500} offset={-50}>
              Top
            </Scroll>
          </li>
          <li className="mr-5 hover:underline hover:text-gray-100">
            <Scroll to="about" smooth={true} duration={500} offset={-50}>
              About
            </Scroll>
          </li>
          <li className="mr-5 hover:underline hover:text-gray-100">
            <Scroll to="skill" smooth={true} duration={500} offset={-50}>
              Skill
            </Scroll>
          </li>
          <li className="mr-5 hover:underline hover:text-gray-100">
            <Scroll to="mysite" smooth={true} duration={500} offset={-50}>
              My Site
            </Scroll>
          </li>
          <li className="mr-5 hover:underline hover:text-gray-100">
            <Scroll to="future" smooth={true} duration={500} offset={-50}>
              Future
            </Scroll>
          </li>
        </ul>
      </header>

      <Outlet />
    </>
  );
});
