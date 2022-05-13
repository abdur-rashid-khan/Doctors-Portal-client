import React from "react";
import './ServicesCardDisplay.css'

const ServicesCardDisplay = ({img,content}) => {
  return (
    <div>
      {/* card lg:card-side bg-base-100 shadow-xl rounded infoCardSize */}
      <div className="card  bg-gray-100 shadow-xl rounded border-2" id="serviceCardSize">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl text-slate-700">{content.title}</h2>
          <p className="text-slate-700">{content.about}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCardDisplay;
