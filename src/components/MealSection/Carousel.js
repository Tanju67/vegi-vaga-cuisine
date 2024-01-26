import React, { useState } from "react";
import classes from "./Carousel.module.css";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import MealList from "./MealList";

function Carousel({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex((prev) => prev + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    } else {
      setSlideIndex(slides.length - 1);
    }
  };
  return (
    <div className={classes.carousel}>
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className={`${classes.arrow} ${classes.arrowLeft}`}
      />
      {slides.map((slide, i) => (
        <div
          key={i}
          className={
            i === slideIndex
              ? classes.imgBox
              : `${classes.imgBox} ${classes.imgBoxHidden} `
          }
        >
          <img src={slide.img} alt={i} />
          <MealList slide={slide} />
        </div>
      ))}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className={`${classes.arrow} ${classes.arrowRight}`}
      />
      <span className={classes.indicators}>
        {slides.map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={
                i === slideIndex
                  ? classes.indicator
                  : `${classes.indicator} ${classes.indicatorInactive}`
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Carousel;
