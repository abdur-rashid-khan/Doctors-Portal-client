import React from 'react';
import InfoContentDisplay from './InfoContentDisplay';
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg";

const InfoWrapper = () => {
  const content = [
    {
      title:"Opening Hours",
      about:"Lorem Ipsum is simply dummy text of the pri"
    },
    {
      title:"Visit our location",
      about:"Brooklyn, NY 10036, United States"
    },
    {
      title:"Contact us now",
      about :"0163616*****"
    }
  ]
  let cardBg = 'cardBg';
  return (
    <div className='grid sm:grid-cols-3 md:grid-cols-3 py-16 gap-4 '>
      <InfoContentDisplay img={clock} data={content[0]} id={cardBg}/>
      <InfoContentDisplay img={marker} data={content[1]} />
      <InfoContentDisplay img={phone} data={content[2]} id={cardBg}/>
    </div>
  );
};

export default InfoWrapper;