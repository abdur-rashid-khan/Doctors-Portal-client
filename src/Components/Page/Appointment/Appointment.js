import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Footer from "../../shared/Footer/Footer";
import BannerImg from "../../../assets/images/chair.png";
import { format } from "date-fns";
import PrimaryBtn from "../../shared/PrimaryBtn/PrimaryBtn";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  let selectedDate = <p className="py-2">Please pick a day.</p>;
  if (date) {
    selectedDate = <p className="py-2">You picked {format(date, "PP")}</p>;
  }
  return (
    <section>
      <div id="banner" className="">
        <div className="hero min-h-full ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex-1">
            <img
              src={BannerImg}
              className="max-w-lg rounded-lg shadow-2xl w-full"
              alt=""
            />
            </div>
            <div className="pt-6 flex-1 bg-slate-200 text-center">
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
                footer={selectedDate}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Appointment;


