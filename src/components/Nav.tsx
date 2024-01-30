import React from "react";
import NavItem from "./NavItem";

function Nav() {
  return (
    <nav>
      <ul className="flex md:gap-7 gap-1">
        <NavItem title="Main page" to="/" />
        <NavItem title="Аbout" to="/about" />
      </ul>
    </nav>
  );
}

export default Nav;
