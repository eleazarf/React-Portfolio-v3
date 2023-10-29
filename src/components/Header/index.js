import React from "react";
import Nav from "../Nav/Nav";
import Social from "../Social/index";
import "./header.css";

function Header() {
  return (
    <header>
      <Nav />
      <Social />
    </header>
  );
}

export default Header;