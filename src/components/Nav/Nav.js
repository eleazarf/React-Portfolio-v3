// Import necessary modules and styles
import React from "react";
import "./nav.css";
import DesktopNav from "./DesktopNav"; // Import the 'DesktopNav' component
import MobileNav from "./MobileNav"; // Import the 'MobileNav' component

// Define the 'Nav' component
function Nav() {
   return (
    <>
       <DesktopNav /> {/* Render the desktop navigation component */}
       <MobileNav /> {/* Render the mobile navigation component */}
       </>
    );
 }

// Export the 'Nav' component as the default export
export default Nav;
