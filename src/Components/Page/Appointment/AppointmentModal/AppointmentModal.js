import { format } from "date-fns";
import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from "sweetalert2";
import auth from "../../../../firebase.init";

const AppointmentModal = ({ treatment, date, setTreatment , refetch}) => {
  const { name  , slots, _id} = treatment;
  // console.log(slots);
  const [user, loading, error] = useAuthState(auth);
  const BookingTreatment = e =>{
    e.preventDefault();
    const userName = e.target.userName.value; 
    const userNumber = e.target.userNumber.value; 
    const slot = e.target.slots.value; 
    const userEmail = e.target.userEmail.value; 
    const formattedDate = format(date, 'PP');
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot:slot,
      patientEmail:userEmail,
      patientName:userName ,
      phone:userNumber ,
  }
    fetch('https://fast-fjord-41065.herokuapp.com/booking',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        Swal.fire('Booking success',' ','success')
      }else{
        Swal.fire('already booking you',' ','info')
      }
      console.log(data)
    })
    refetch()
    setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box bg-gray-50">
          <div className="">
            <h2 className="capitalize pb-4 text-xl text-cyan-500">{name}</h2>
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-600 hover:bg-red-700 border-0 text-white"
            >
              ✕
            </label>
          </div>

          <form onSubmit={BookingTreatment}>
            <div className="">
              <input
                type="text"
                name="date"
                id="date"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-400 p-3 bg-transparent rounded text-gray-600"
                value={format(date, "PP") || ""}
                disabled
              />
            </div>
            <div className="py-3">
              <select name="slots" className="select shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-teal-500 p-3 bg-transparent rounded input-info text-gray-600 ">
                {
                  slots.map((time,index) => <option value={time || ''} key={index} className="hover:text-gray-600">{time}</option>)
                }
              </select>
            </div>
            <div className="py-3">
              <input
                type="text"
                name="userName"
                id="userName"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-teal-500 p-3 bg-transparent rounded input-success text-black"
                value={user?.displayName || ""}
                readOnly
              />
            </div>
            <div className="py-3">
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-teal-500 p-3 bg-transparent rounded input-success text-black"
                value={user?.email || ""}
                readOnly
              />
            </div>
            <div className="py-3">
              <input
                type="number"
                name="userNumber"
                id="userNumber"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-teal-500 p-3 bg-transparent rounded input-success text-black"
                placeholder="Phone Number"
                required
              />
            </div>
            <button
              htmlFor="booking-modal"
              className="btn font-bold bg-gradient-to-r from-emerald-400 to-sky-400 border-0 rounded text-slate-100 w-full hoverBtnSpacing"
            >
              Booking Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AppointmentModal;
