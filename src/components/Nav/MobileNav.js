import React from "react";
 import NavLinks from "./NavLinks";
 import "./nav.css";
 import { CgMenu } from "react-icons/cg";
 import { useState } from "react";
 import { GrClose } from "react-icons/gr";

 const MobileNav = () => {
   const [open, setOpen] = useState(false);
   const hamburgerIcon = (
     <CgMenu className="burger-icon" onClick={() => setOpen(!open)} />
   );
   const closeIcon = (
     <GrClose className="burger-icon" onClick={() => setOpen(!open)} />
   );
   const closeMobileMenu = () => {
     setOpen(false);
   };
   return (
     <div className="mobile-nav">
       {open ? closeIcon : hamburgerIcon}
       {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
     </div>
   );
 };
 export default MobileNav;