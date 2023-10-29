import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  FingerPrintIcon,
  CodeIcon,
  DocumentTextIcon,
} from "@heroicons/react/solid";

function NavLinks(props) {
  return (
    <nav>
      <NavLink
        to="/"
        activeclassname="active"
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        <HomeIcon />
        <span className="nav-text">Home</span>
      </NavLink>
      <NavLink
        to="/about"
        activeclassname="active"
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        <FingerPrintIcon />
        <span className="nav-text">About</span>
      </NavLink>
      <NavLink
        to="/projects"
        activeclassname="active"
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        <CodeIcon />
        <span className="nav-text">Projects</span>
      </NavLink>
      <a
        href="https://docs.google.com/document/d/1am0JOKXBAXGEix3o3CYpSGg_nvdyXvu6/edit?usp=sharing&ouid=105676665688643299754&rtpof=true&sd=true"
        target="__blank"
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        <DocumentTextIcon />
        <span className="nav-text">Resume</span>
      </a>
    </nav>
  );
}

export default NavLinks;