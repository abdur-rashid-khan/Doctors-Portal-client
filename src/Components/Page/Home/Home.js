import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from '../Banner/Banner';
import ContactFrom from '../ContactFrom/ContactFrom';
import Info from '../Info/Info';
import MackAppointment from '../MackAppointment/MackAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Info/>
      <Services/>
      <Treatment/>
      <MackAppointment/>
      <Testimonial/>
      <ContactFrom/>
      <Footer/>
    </div>
  );
};

export default Home;