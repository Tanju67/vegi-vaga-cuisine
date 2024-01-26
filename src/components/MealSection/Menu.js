import React from "react";
import classes from "./Menu.module.css";
import Image1 from "../../assets/img-1.jpg";
import Image2 from "../../assets/img-2.jpg";
import Image3 from "../../assets/img-3.jpg";
import Image4 from "../../assets/img-4.jpg";
import Image5 from "../../assets/img-5.jpg";
import Carousel from "../MealSection/Carousel";
import { ImSpoonKnife } from "react-icons/im";

const slides = [
  { img: Image1, maintitle: "Our Menu", menu: [], logo: <ImSpoonKnife /> },
  {
    img: Image2,
    title: "Starters ",
    menu: [
      { name: "Humus", price: 2 },
      { name: "Burrata bruschetta", price: 3 },
      { name: "Carrot ginger soup", price: 2 },
      { name: "Mushroom pâté", price: 3 },
      { name: "Vegan summer rolls", price: 3 },
    ],
  },
  {
    img: Image3,
    title: "Vegetarian Main Courses",
    menu: [
      { name: "Veggie chilli", price: 8 },
      { name: "Mushroom Bolognese", price: 6 },
      { name: "Chickpea curry", price: 7 },
      { name: "Black bean burgers", price: 10 },
      { name: "Vegetables Wellington", price: 13 },
      { name: "Garlic mushroom pasta", price: 9 },
      { name: "Channa masala recipe", price: 12 },
    ],
  },
  {
    img: Image4,
    title: "Salads",
    menu: [
      { name: "Garden salad", price: 3 },
      { name: "Italian salad", price: 2 },
      { name: "Chopped salad", price: 3 },
      { name: "Pasta salad", price: 4 },
      { name: "Greek salad", price: 2 },
      { name: "Ceaser salad", price: 3 },
    ],
  },
  {
    img: Image5,
    title: "Desserts",
    menu: [
      { name: "Cheesecake", price: 5 },
      { name: "Brownies", price: 4 },
      { name: "Chocolate cake", price: 3 },
      { name: "Custard tart", price: 6 },
      { name: "Puddings", price: 3 },
      { name: "Hummingbird cake", price: 11 },
    ],
  },
];

function Menu() {
  return (
    <div id="section_menu" className={classes.menu}>
      <Carousel slides={slides} />
    </div>
  );
}

export default Menu;
