import React from "react";
import classes from "./Footer.module.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className={classes.footer}>
      <h1>
        <a href="#section_home">Vegi-Vaga Coisine</a>
      </h1>
      <div className={classes.row}>
        <div className={classes.address}>
          <p>Rudolf-Breitscheid-Str. 31</p>
          <p>Kaiserslautern 67655</p>
          <p>Tel: 0123456789</p>
        </div>
        <div className={classes.program}>
          <p>Careers</p>
          <p>Royalty Program</p>
          <p>Terms & Conditions</p>
        </div>
        <div className={classes.socialMediaIcon}>
          <FaSquareFacebook />
          <FaSquareTwitter />
          <FaSquareInstagram />
        </div>
      </div>
    </div>
  );
}

export default Footer;
