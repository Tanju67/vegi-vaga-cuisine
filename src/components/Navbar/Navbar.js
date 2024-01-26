import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li className={classes.logo}>
          <a href="#section_home"> Vegi-Vega Cuisine</a>
        </li>
        <div className={classes.nav}>
          <li>
            <a href="#section_menu"> Menu</a>
          </li>
          <li>
            <a href="#section_booking"> Book Now</a>
          </li>
          <li>
            <a href="#section_about"> About Us</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
