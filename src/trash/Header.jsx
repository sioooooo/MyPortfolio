import { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { NavMenu } from "../components/atoms/NavMenu";

export const Header = memo(() => {
  return (
    <>
      <header className="flex items-center justify-between bg-amber-200 h-12">
        <NavMenu />
      </header>
      <Outlet />
    </>
  );
});
