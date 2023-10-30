// Import necessary modules and components
import React from "react";
import NavLinks from "./NavLinks"; // Import the 'NavLinks' component
import "./nav.css";
import { CgMenu } from "react-icons/cg"; // Import the hamburger menu icon
import { useState } from "react";
import { GrClose } from "react-icons/gr"; // Import the close icon

// Define the 'MobileNav' component
const MobileNav = () => {
  // Define a state variable to control the mobile menu's visibility
  const [open, setOpen] = useState(false);

  // Define the hamburger and close icons with click event handlers
  const hamburgerIcon = (
    <CgMenu className="burger-icon" onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <GrClose className="burger-icon" onClick={() => setOpen(!open)} />
  );

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    // Render the mobile navigation menu
    <div className="mobile-nav">
      {open ? closeIcon : hamburgerIcon} {/* Display close or hamburger icon based on menu state */}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      {/* Render 'NavLinks' component if the menu is open */}
    </div>
  );
};

// Export the 'MobileNav' component as the default export
export default MobileNav;
