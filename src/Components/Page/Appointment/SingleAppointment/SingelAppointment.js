import React from "react";

const SingleAppointment = ({ appointment,setTreatment }) => {
  const { name, available } = appointment;
  return (
    <div className="">
      <div className="card bg-gray-100 shadow-lg border">
        <div className="card-body items-center">
          <h2 className="card-title text-cyan-500 font-serif">{name}</h2>
          <div className="py-3">
            <p
              className={
                available.length === 0
                  ? "text-red-500 capitalize font-semibold"
                  : "text-gray-900 capitalize font-semibold"
              }
            >
              {available.length === 0 ? `please try another day` : available[0]}
            </p>
            <p className="pt-1 text-slate-600 capitalize font-semibold text-sm">
              Available Appointment {available.length}
            </p>
          </div>
          <div className="card-actions justify-center">
          {/* <  class="btn modal-button">open modal</> */}
            <label
            htmlFor="booking-modal"
              className={
                available.length === 0
                  ? "btn p-3 px-6 font-semibold border-0 text-red rounded"
                  : "btn font-bold bg-gradient-to-r from-emerald-400 to-sky-400 border-0 rounded text-slate-100 hoverBtnSpacing"
              }
              onClick={() => setTreatment(appointment)}
              disabled={available.length === 0}
              style={{color:available.length === 0 ? "black" : "white"}}
            >
              Booking Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAppointment;
