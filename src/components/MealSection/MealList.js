import React from "react";
import classes from "./MealList.module.css";

function MealList({ slide }) {
  return (
    <div className={classes.menuText}>
      {slide?.maintitle && (
        <div>
          <h1>{slide.logo}</h1>
          <h1>{slide.maintitle}</h1>
        </div>
      )}
      {slide?.title && (
        <div>
          <h1>{slide.title}</h1>
          <ul>
            {slide.menu.map((item) => {
              return (
                <li key={item.name}>
                  <p>
                    <span>{item.name}</span>
                    ...................................................
                    <span>{item.price},00€</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MealList;
