import React from "react";
 import "./nav.css";
 import DesktopNav from "./DesktopNav";
 import MobileNav from "./MobileNav";

 function Nav() {
   return (
    <div className="navigation">
       <DesktopNav />
       <MobileNav />
       </div>
    );
 }

 export default Nav;