import React from "react";

const TestimonialDisplayCard = ({data}) => {
  return (
    <div>
      <div className="card  bg-gray-100 shadow-xl border rounded-lg">
        <div className="card-body">
          <p className="text-slate-700">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className=" mt-4">
            <div className="avatar items-center">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={data.img} alt='people photos'/>
              </div>
              <div className="people_info ml-6 ">
                  <h2 className="card-title text-2xl text-slate-700">{data.name}</h2>
                  <h3 className="font-medium text-gray-600 text-base">{data.location}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDisplayCard;
