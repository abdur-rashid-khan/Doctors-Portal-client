import React from 'react';
import TestimonialDisplayCard from './TestimonialDisplayCard';
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'

const TestimonialCard = () => {
  const TestimonialCardData = [
    {
      _id:1,
      name:'Winson ',
      location:'California',
      img:people1
    },
    {
      _id:2,
      name:'Olivia ',
      location:'London',
      img:people2
    },
    {
      _id:3,
      name:'Emma ',
      location:'New York',
      img:people3
    },
  ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 pt-14'>
      {
        TestimonialCardData.map(d => <TestimonialDisplayCard key={d._id} data={d}/>)
      }
    </div>
  );
};

export default TestimonialCard;