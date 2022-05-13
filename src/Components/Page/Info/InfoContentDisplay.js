import React from "react";
import './InfoContentDisplay.css'

const InfoContentDisplay = ({img,data,id}) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl rounded infoCardSize" id={id}>
        <figure>
          <img
          className="p-2 rounded"
            src={img}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.about}</p>
          {/* <div className="card-actions justify-end">
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default InfoContentDisplay;
