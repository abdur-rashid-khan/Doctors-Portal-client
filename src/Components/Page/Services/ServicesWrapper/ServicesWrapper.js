import React from "react";
import ServicesCardDisplay from "../ServicesCardDisplay/ServicesCardDisplay";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";

const ServicesWrapper = () => {
  const content = [
    {
      title:"Fluoride Treatment",
      about:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    },
    {
      title:"Cavity Filling",
      about:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    },
    {
      title:"Teeth Whitening",
      about:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    }
  ]
  return (
    <div>
      <div className="grid sm:grid-cols-3 md:grid-cols-3 py-16 gap-4">
        <ServicesCardDisplay img={fluoride} content={content[0]}/>
        <ServicesCardDisplay img={cavity} content={content[1]}/>
        <ServicesCardDisplay img={whitening} content={content[2]}/>
      </div>
    </div>
  );
};

export default ServicesWrapper;
