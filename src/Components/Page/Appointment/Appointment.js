import React, { useState } from 'react';
import Footer from '../../shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import './Appointment.css'

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}/>
      <AvailableAppointment date={date} setDate={setDate}/>
      <Footer />
    </div>
  );
};

export default Appointment;

