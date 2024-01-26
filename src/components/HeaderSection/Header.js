import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header} id="section_home">
      <div className={classes.welcome}>
        <div className={classes.heading}>
          <h1>
            <span>Vegi-Vega Cuisine</span>
          </h1>
          <p>Eat Healty, Live Healty</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
