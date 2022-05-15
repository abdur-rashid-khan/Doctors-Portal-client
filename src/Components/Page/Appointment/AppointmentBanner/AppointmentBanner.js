import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import BannerImg from "../../../../assets/images/chair.png";

const AppointmentBanner = ({date , setDate}) => {

  return (
    <div>
      <div id="banner" className="">
        <div className="hero min-h-full pt-2 xl:pt-2 lg:pt-2 sm:pt-20 md:pt-20">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="">
              <img
                src={BannerImg}
                className="max-w-xl rounded-lg shadow-2xl w-full"
                alt=""
              />
            </div>
            <div className="py-4 bg-slate-200 text-center rounded-lg">
              <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
