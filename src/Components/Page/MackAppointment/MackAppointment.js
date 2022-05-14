import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import PrimaryBtn from '../../shared/PrimaryBtn/PrimaryBtn';
import './MackAppointment.css'

const MackAppointment = () => {
  return (
    <section className='my-16' id='appointmentBg'>
      <div className="container mx-auto px-4">
        <div className='flex items-center justify-center '>
          <div id='appointment_img' className='flex-1  lg:block hidden'>
            <img className='mt-[-130px]' src={doctor} alt="" />
          </div>
          <div className='flex-1 text-center xl:text-left lg:text-left py-4'>
            <h4 className='text-xl text-teal-400 font-bold'>Appointment</h4>
            <h1 className='text-3xl pt-1 text-white'>Make an appointment Today</h1>
            <p className='py-6 text-slate-300 text-base px-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MackAppointment;