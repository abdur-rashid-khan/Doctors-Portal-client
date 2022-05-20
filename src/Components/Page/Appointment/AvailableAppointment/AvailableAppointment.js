import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../shared/Loading/Loading";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import SingleAppointment from "../SingleAppointment/SingelAppointment";

const AvailableAppointment = ({ date }) => {
  // const [appointment, setAppointment] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, 'PP');
  // use react-query fast time 

  // useEffect(() => {
  //   fetch(`https://fast-fjord-41065.herokuapp.com/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setAppointment(data));
  // }, [formattedDate]);
  const {data:appointment , isLoading , refetch} = useQuery(['available',formattedDate],() =>
  fetch(`https://fast-fjord-41065.herokuapp.com/available?date=${formattedDate}`).then(res =>
    res.json()));
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div>
            <div className="header_AvailableAppointment text-center">
              <h2 className="text-cyan-500 text-2xl font-semibold font-serif">
                {" "}
                Available Services On {format(date, "PP")}
              </h2>
              <p className="text-xl py-4 font-semibold text-gray-700">
                Please select a service
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 pt-12">
              {appointment.map((s) => (
                <SingleAppointment
                  appointment={s}
                  key={s._id}
                  setTreatment={setTreatment}
                  
                ></SingleAppointment>
              ))}
            </div>
            {treatment && (
              <AppointmentModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
                refetch={refetch}
              ></AppointmentModal>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvailableAppointment;
