import React from "react";
import BannerImg from "../../../assets/images/chair.png";
import PrimaryBtn from "../../shared/PrimaryBtn/PrimaryBtn";
import './Banner.css'

const Banner = () => {
  return (
    <div id="banner" className="">
      <div className="hero min-h-full ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl w-full" alt=""/>
          <div className="pt-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold text-slate-700">Your New Smile Starts Here</h1>
            <p className="py-6 text-slate-700">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryBtn>Get started</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
