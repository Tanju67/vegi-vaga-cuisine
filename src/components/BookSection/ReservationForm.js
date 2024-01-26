import React from "react";
import classes from "./ReservationForm.module.css";
import Input from "./Input";
import { FaRegAddressBook } from "react-icons/fa";

function ReservationForm() {
  return (
    <div id="section_booking" className={classes.reservation}>
      <form>
        <div className={classes.headerPart}>
          <h1>
            <FaRegAddressBook />
          </h1>
          <h1>RESERVATION FORM</h1>
          <p>Opening Hours:</p>
          <p>Sun - Sat: 11.00 - 23.00</p>
        </div>

        <div className={classes.row}>
          <Input name="Date*" title="Date*" type="date" />
          <Input name="time" title="Time* (HH:MM AM/PM)" type="time" />
          <Input name="gusetNumber*" title="No. of Guests*" type="number" />
        </div>
        <div className={classes.row}>
          <Input name="name" title="Name*" type="text" />
          <Input name="familyName" title="Family Name*" type="text" />
        </div>
        <div className={classes.row}>
          <Input name="comment" title="Comment" element="textarea" />
        </div>
        <div className={classes.row}>
          <span>*Required fields</span>
        </div>
        <button>Book Now</button>
      </form>
    </div>
  );
}

export default ReservationForm;
