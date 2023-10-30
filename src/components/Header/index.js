// Import necessary modules and styles
import React from "react";
import Nav from "../Nav/Nav"; // Import the navigation component
import Social from "../Social/index"; // Import the social component
import "./header.css"; // Import the header styles

// Define the 'Header' component
function Header() {
  return (
    // Render the header, which includes the navigation and social components
    <header>
      <Nav /> {/* Render the navigation component */}
      <Social /> {/* Render the social component */}
    </header>
  );
}

// Export the 'Header' component as the default export
export default Header;
