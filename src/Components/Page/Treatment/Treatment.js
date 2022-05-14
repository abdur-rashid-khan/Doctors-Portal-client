import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryBtn from "../../shared/PrimaryBtn/PrimaryBtn";

const Treatment = () => {
  return (
    <div className="container mx-auto px-4 pb-14">
      <div className="card lg:card-side bg-gray-100 border-2 shadow-xl rounded-xl">
        <figure>
          <img
            src={treatment}
            alt="Album"
            style={{ width: "100%", height: "100%" }}
          />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title text-left inline-block font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-slate-700 ">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="py-8 text-base text-slate-500">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
