import React from "react";
import classes from "./AboutUs.module.css";
import ourFood from "../../assets/ourFood.jpg";
import ourAtm from "../../assets/ourAtm.jpg";
import ourQuality from "../../assets/ourQuality.jpg";

function AboutUs() {
  return (
    <div id="section_about" className={classes.aboutSection}>
      <h1>ABOUT US</h1>
      <div className={classes.row}>
        <img src={ourFood} alt="" />
        <div className={classes.text}>
          <h3>Our Food</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            vel delectus sit laboriosam cum dignissimos. Vel similique quod
            reprehenderit eveniet illum iure sunt incidunt?
          </p>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.text}>
          <h3>Our Quality</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            vel delectus sit laboriosam cum dignissimos. Vel similique quod
            reprehenderit eveniet illum iure sunt incidunt?
          </p>
        </div>
        <img src={ourQuality} alt="" />
      </div>
      <div className={classes.row}>
        <img src={ourAtm} alt="" />
        <div className={classes.text}>
          <h3>Our Atmosphere</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quos
            ipsa nisi, recusandae aspernatur laborum aliquam veniam illo,
            repudiandae, perferendis rerum. Laborum consectetur minima incidunt
            quo illum ipsa, quaerat nobis?
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
