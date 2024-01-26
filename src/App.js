import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/HeaderSection/Header";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/MealSection/Menu";
import ReservationForm from "./components/BookSection/ReservationForm";
import AboutUs from "./components/AboutUsSection/AboutUs";
import Footer from "./components/Footer/Footer";

function app() {
  return (
    <Wrapper>
      <Header />
      <Navbar />
      <Menu />
      <section className="fixedBackground"></section>
      <ReservationForm />
      <AboutUs />
      <Footer />
    </Wrapper>
  );
}

export default app;
