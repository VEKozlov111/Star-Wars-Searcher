import React from "react";
import Nav from "./Nav"


function Header() {
  return (
    <header className="flex py-4 bg-color5 md:px-9 px-2 justify-between">
      <h1>
        <a
          className="hover:text-color2 text-color1 duration-500 text-2xl"
          href="/"
        >
          Star-Wars-Seacher
        </a>
      </h1>
      <Nav />
    </header>
  );
}

export default Header;
