import React from "react";
import { Link } from "react-router-dom";
import { INavItemProps } from "../types/types";

function NavItem({ title, to }: INavItemProps) {
  return (
    <li>
      <Link className="btn" to={to}>
        {title}
      </Link>
    </li>
  );
}

export default NavItem;