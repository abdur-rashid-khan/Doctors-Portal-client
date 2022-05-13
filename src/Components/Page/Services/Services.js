import React from 'react';
import ServicesWrapper from './ServicesWrapper/ServicesWrapper';

const Services = () => {
  return (
    <div className='container mx-auto px-4 py-4'>
      <div className="servicesHeader text-center">
        <p className='font-bold text-2xl text-teal-400'>Our Services</p>
        <h1 className='text-4xl text-slate-800 py-2'>Services We Provide</h1>
      </div>
      <ServicesWrapper/>
    </div>
  );
};

export default Services;