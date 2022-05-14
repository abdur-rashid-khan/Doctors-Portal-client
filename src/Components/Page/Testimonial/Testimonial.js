import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import TestimonialCard from './TestimonialCard/TestimonialCard';

const Testimonial = () => {
  return (
    <section className='py-6'>
      <div className="container mx-auto px-4">
        <div className="">
          <div className="testimonial_header flex justify-between items-center">
            <div className="content-text">
              <h3 className='text-xl text-teal-400 font-bold'>Testimonial</h3>
              <h1 className='text-3xl pt-1 text-black py-4'>What Our Patients Says</h1>
            </div>
            <div className="quart w-24 md:w-48 lg:w-48">
              <img  src={quote} alt="" />
            </div>
          </div>
          {/* Testimonial Card */}
          <div id="testimonialCard">
            <TestimonialCard/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;