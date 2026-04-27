import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-center gap-10 p-10  bg-black text-white">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-500" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/User"
      >
        User
      </NavLink>
      <NavLink to="/About">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-500" : "",
                e.isActive ? "font-bold" : "",
              ].join(" ")}
            >
              Home
            </span>
          );
        }}
      </NavLink>
    </nav>
  );
};

export default Nav;
