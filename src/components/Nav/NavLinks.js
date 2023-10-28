import React from "react";
 import "./nav.css";
 import { NavLink } from "react-router-dom";

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
         Home
       </NavLink>
       <NavLink
         to="/about"
         activeclassname="active"
         onClick={() => {
           props.isMobile && props.closeMobileMenu();
         }}
       >
         About
       </NavLink>
       <NavLink
         to="/portfolio"
         activeclassname="active"
         onClick={() => {
           props.isMobile && props.closeMobileMenu();
         }}
       >
         Projects
       </NavLink>
       <a
         href=""
         target="__blank"
         onClick={() => {
           props.isMobile && props.closeMobileMenu();
         }}
       >
         Resume
       </a>
     </nav>
   );
 }

 export default NavLinks;